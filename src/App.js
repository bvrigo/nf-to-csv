import React, { useState } from "react";
import "./index.css"

import Dropzone from "react-dropzone";
import pdfjsLib from 'pdfjs-dist';
import PDFJSWorker from "pdfjs-dist/build/pdf.worker.js"; // add this to fit 2.3.0
//convert.js



pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

async function getPdfText(data) {
  let doc = await pdfjsLib.getDocument({data}).promise;
  let pageTexts = Array.from({length: doc.numPages}, async (v,i) => {
      return (await (await doc.getPage(i+1)).getTextContent()).items.map(token => token.str).join('');
  });
  return (await Promise.all(pageTexts)).join('');
}

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('_');
}



export default function App() {
  const [fileNames, setFileNames] = useState([]);
  const [final, setFinal] = useState([])

  const downloadTxtFile = () => {
    const element = document.createElement('a');
    const file = new Blob([formatar()],    
                {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = "tabela_" + formatDate(Date.now())+ ".csv";
    document.body.appendChild(element);
    element.click();
  }

  

  const handleDrop = (acceptedFiles) => {
    let aux = []
    acceptedFiles.forEach((file) => {
      if (!fileNames.includes(file.name) && file.type === "application/pdf") {
        try {
        const reader = new FileReader()

        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
        // Do whatever you want with the file contents
          const binaryStr = reader.result
          getPdfText(binaryStr).then((result) => {
            try {
            let nome = result.match(/RAZÃO SOCIAL([\s\S]*?)CNPJ/)
            if (nome) {
              nome = nome[1]
            
            let numero = result.match(/Nº ([\s\S]*?)S/)[1]
            const regexExp = /Num\.([0-9]*?)Venc\.([0-9]{2}\/[0-9]{2}\/[0-9]{4})ValorR\$[\s]*([0-9]*?,[0-9]{2})/
            let match;
            while(match = regexExp.exec(result)) {
                let nota = {NF: parseInt(numero.replace('.', '')) + '/' + parseInt(match[1]), vencimento: match[2].trim(), valor: '"' + match[3] + '"', cliente: nome}
                result = result.replace(match[0], '')
                final.push(nota)
            }
          }} catch(e) {console.log(e)}
            })
        }
        reader.readAsArrayBuffer(file)
        aux.push(file.name)
      } catch (e) {console.log(e)}
      }
    })
    setFileNames([...fileNames,...aux]);
  };

  function formatar() {
    let string = 'VENCTO,CLIENTE,NF,"VALOR"\n'
    final.forEach((item) => {
      string += item.vencimento + ',' + item.cliente + ',' + item.NF + ',' + item.valor + '\n'
    })
    return string
  }

  function limpar() {
    setFinal([])
    setFileNames([])
  }

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
        <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Converter notas para excel</h1>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%'}}>
        <Dropzone onDrop={handleDrop} >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <span role="img">📂</span>
              <p>Arraste e solte os arquivos aqui ou clique para adicioná-los</p>
              <div>
              <strong>Arquivos: </strong>
              <ul>
                {fileNames.map(fileName => (
                  <li key={fileName}>{fileName}</li>
                ))}
              </ul>
            </div>
            </div>
          )}
        </Dropzone>
        </div>
        <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
          <button style={{ justifyContent: 'center', alignItems: 'center',margin: 10}} disabled={final.length === 0}  onClick={downloadTxtFile}>Gerar tabela</button>
          <button style={{justifyContent: 'center', alignItems: 'center',margin: 10}} disabled={final.length === 0} onClick={limpar}>Limpar seleção</button>
        </div>

    </div>
  );
}