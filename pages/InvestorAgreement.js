// import React, { useState, useRef } from 'react';
// import { Box, Button, Stepper, Step, StepLabel, Typography, Paper, Container, Checkbox, FormControlLabel } from '@mui/material';
// import { useRouter } from 'next/router';
// import SignatureCanvas from 'react-signature-canvas';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import Documents from './../components/Documents';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import Del from '../components/Del';

// const DocumentStep = ({ title, content, onAgree, scrolledToEnd, isLastStep, onNext, checked, setChecked }) => {
//   const contentRef = useRef(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const handleScroll = () => {
//     if (contentRef.current) {
//       const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
//       const atBottom = scrollTop + clientHeight >= scrollHeight;
//       scrolledToEnd(atBottom);
//       if (atBottom && !checked) {
//         setChecked(true);
//       }
//     }
//   };

//   const handleNextClick = () => {
//     setChecked(false);
//     onNext();
//   };

//   return (
//       <Paper elevation={3} sx={{ p: 2, mb: 2, width: isMobile ? '100%' : '100vh', mx: 'auto' }}>
//         <Typography variant="h6" gutterBottom>{title}</Typography>
//         <Box
//             ref={contentRef}
//             onScroll={handleScroll}
//             sx={{ maxHeight: '50vh', overflowY: 'auto', mb: 2 }}
//         >
//           <Typography variant="body1">
//             <Del/>
//           </Typography>
//         </Box>
//         {!isLastStep && (
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <FormControlLabel
//                   control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
//                   label="I have read and agree to the terms and conditions"
//               />
//               <Button
//                   
//                   color="primary"
//                   onClick={handleNextClick}
//                   // disabled={!checked}
//               >
//                 Далее
//               </Button>
//             </Box>
//         )}
//       </Paper>
//   );
// };

// const SignatureStep = ({ onSaveSignature, onFinish, canFinish }) => {
//   const [canProceed, setCanProceed] = useState(false);
//   const sigCanvas = useRef(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const clear = () => {
//     console.log("Очистка холста");
//     sigCanvas.current.clear();
//   };

//   const save = () => {
//     if (sigCanvas.current.isEmpty()) {
//       alert('Please sign first.');
//       return;
//     }
//     const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
//     console.log("Подпись сохранена:", dataURL);
//     onSaveSignature(dataURL);
//     setCanProceed(true);
//   };

//   return (
//       <Paper elevation={3} sx={{ p: 2, mb: 2, width: isMobile ? '100%' : '100vh', mx: 'auto' }}>
//         <Typography variant="h6" gutterBottom>Signature</Typography>
//         <Typography variant="body1" sx={{ mb: 2 }}>
//           Please sign below to agree to the documents.
//         </Typography>
//         <Box sx={{ p: 2, mb: 2, width: '100%', height: isMobile ? '50vh' : '80vh', mx: 'auto' }}>
//           <SignatureCanvas
//               penColor='black'
//               canvasProps={{ width: isMobile ? '350%' : '700%', height: isMobile ? '600%' : '1000%', className: 'sigCanvas' }}
//               ref={sigCanvas}
//           />
//         </Box>
//         <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
//           <Button  color="secondary" onClick={clear}>
//             clear
//           </Button>
//           <Button  color="primary" onClick={save}>
//             save
//           </Button>
//         </Box>
//         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//           <Button
//               
//               color="primary"
//               onClick={onFinish}
//               disabled={!canProceed}
//           >
//             finish
//           </Button>
//         </Box>
//       </Paper>
//   );
// };


// const InvestorAgreement = () => {
//   const documents = Documents;
//   const [activeStep, setActiveStep] = useState(0);
//   const [completedSteps, setCompletedSteps] = useState([false, false, false, false, false]);
//   const [canProceed, setCanProceed] = useState(false);
//   const [signatures, setSignatures] = useState({});
//   const [checked, setChecked] = useState(false);
//   const router = useRouter();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const handleAgree = () => {
//     console.log("Согласие с документом:", documents[activeStep].title);
//     const newCompletedSteps = [...completedSteps];
//     newCompletedSteps[activeStep] = true;
//     setCompletedSteps(newCompletedSteps);
//     setCanProceed(true);
//   };

//   const handleNext = () => {
//     if (activeStep < documents.length - 1) {
//       console.log("Переход к следующему документу");
//       setActiveStep(prevStep => prevStep + 1);
//       setChecked(false); // Сброс состояния checked на false
//     } else {
//       console.log("Переход к шагу подписи");
//       setActiveStep(prevStep => prevStep + 1);
//       setCanProceed(true);
//     }
//   };

//   const handleSaveSignature = (signature) => {
//     console.log("Подпись получена:", signature);
//     setSignatures(prev => ({
//       ...prev,
//       signature,
//     }));
//     const newCompletedSteps = [...completedSteps];
//     newCompletedSteps[documents.length] = true;
//     setCompletedSteps(newCompletedSteps);
//     setCanProceed(true);
//   };

//   const generatePDF = async () => {
//     const pdf = new jsPDF();
//     const signatureImage = signatures.signature;

//     for (let i = 0; i < documents.length; i++) {
//       const doc = documents[i];
//       pdf.text(doc.title, 10, 10);
//       pdf.text(doc.content, 10, 20);
//       pdf.addImage(signatureImage, 'PNG', 10, pdf.internal.pageSize.height - 30, 50, 20);

//       if (i !== documents.length - 1) {
//         pdf.addPage();
//       }
//     }

//     const pdfBlob = pdf.output('blob');

//     // Сохранение PDF в базу данных
//     await savePDFToDB(pdfBlob);
//   };

//   const savePDFToDB = async (pdfBlob) => {
//     try {
//       const formData = new FormData();
//       formData.append('file', pdfBlob, 'signedDocuments.pdf');
//       formData.append('userId', '667aa2b11a9caacb2c79de03');
//       // debugger

//       const response = await fetch('/api/saveDocuments', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Не удалось сохранить документы');
//       }

//       alert('Спасибо за согласие с документами и предоставление необходимой информации.');
//       router.push('/');
//     } catch (error) {
//       console.error(error);
//       alert('Произошла ошибка при сохранении документов.');
//     }
//   };

//   const handleFinish = async () => {
//     console.log("Завершение процесса согласования");
//     await generatePDF();
//   };

//   return (
//       <Container sx={{ mt: isMobile ? 4 : 0, width: isMobile ? '100%' : '200vh' }}>
//         <Stepper activeStep={activeStep} alternativeLabel>
//           {documents.map((doc, index) => (
//               <Step key={doc.title} completed={completedSteps[index]}>
//                 <StepLabel>{doc.title}</StepLabel>
//               </Step>
//           ))}
//           <Step key="Подпись" completed={completedSteps[documents.length]}>
//             <StepLabel>Signature</StepLabel>
//           </Step>
//         </Stepper>
//         <Box sx={{ mt: 4 }}>
//           {activeStep < documents.length ? (
//               <DocumentStep
//                   title={documents[activeStep].title}
//                   content={<Del/>}
//                   onAgree={handleAgree}
//                   scrolledToEnd={setCanProceed}
//                   isLastStep={false}
//                   onNext={handleNext}
//                   checked={checked} // Передача состояния checked
//                   setChecked={setChecked} // Передача функции setChecked
//               />
//           ) : (
//               <SignatureStep
//                   onSaveSignature={handleSaveSignature}
//                   onFinish={handleFinish}
//                   canFinish={canProceed}
//               />
//           )}
//         </Box>
//       </Container>
//   );
// };

// export default InvestorAgreement;
import React, { useState, useRef } from 'react';
import { Box, Button, Stepper, Step, StepLabel, Typography, Paper, Container, Checkbox, FormControlLabel } from '@mui/material';
import { useRouter } from 'next/router';
import SignatureCanvas from 'react-signature-canvas';
import Documents from './../components/Documents';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const DocumentStep = ({ title, content, onAgree, scrolledToEnd, isLastStep, onNext, checked, setChecked }) => {
  const contentRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const atBottom = scrollTop + clientHeight >= scrollHeight;
      scrolledToEnd(atBottom);
      if (atBottom && !checked) {
        setChecked(true);
      }
    }
  };

  const handleNextClick = () => {
    setChecked(false);
    onNext();
  };

  return (
      <Paper elevation={3} sx={{ p: 2, mb: 2, width: isMobile ? '100%' : '100vh', mx: 'auto' }}>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Box
            ref={contentRef}
            onScroll={handleScroll}
            sx={{ maxHeight: '50vh', overflowY: 'auto', mb: 2 }}
        >
          <Typography variant="body1">{content}</Typography>
        </Box>
        {!isLastStep && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <FormControlLabel
                  control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
                  label="I have read and agree to the terms and conditions"
              />
              <Button
                  
                  color="primary"
                  onClick={handleNextClick}
                  disabled={!checked}
              >
                Далее
              </Button>
            </Box>
        )}
      </Paper>
  );
};

const SignatureStep = ({ onSaveSignature, onFinish, canFinish }) => {
  const [canProceed, setCanProceed] = useState(false); // Добавлено состояние canProceed
  const sigCanvas = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const clear = () => {
    console.log("Очистка холста");
    sigCanvas.current.clear();
  };

  const save = () => {
    if (sigCanvas.current.isEmpty()) {
      alert('Please sign first.');
      return;
    }
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    console.log("Подпись сохранена:", dataURL);
    onSaveSignature(dataURL);
    setCanProceed(true); // Устанавливаем canProceed в true после сохранения подписи
  };

  return (
      <Paper elevation={3} sx={{ p: 2, mb: 2, width: isMobile ? '100%' : '100vh', mx: 'auto' }}>
        <Typography variant="h6" gutterBottom>Signature</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Please sign below to agree to the documents.
        </Typography>
        <Box sx={{ p: 2, mb: 2, width: '100%', height: isMobile ? '50vh' : '80vh', mx: 'auto' }}>
          <SignatureCanvas
              penColor='black'
              canvasProps={{ width: isMobile ? '350%' : '700%', height: isMobile ? '600%' : '1000%', className: 'sigCanvas' }}
              ref={sigCanvas}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button  color="secondary" onClick={clear}>
            clear
          </Button>
          <Button  color="primary" onClick={save}>
            save
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
              
              color="primary"
              onClick={onFinish}
              disabled={!canProceed} // Используем !canProceed для отключения кнопки finish
          >
            finish
          </Button>
        </Box>
      </Paper>
  );
};


const InvestorAgreement = () => {
  const documents = Documents;
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([false, false, false, false, false]);
  const [canProceed, setCanProceed] = useState(false);
  const [signatures, setSignatures] = useState({});
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleAgree = () => {
    console.log("Согласие с документом:", documents[activeStep].title);
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps[activeStep] = true;
    setCompletedSteps(newCompletedSteps);
    setCanProceed(true);
  };

  const handleNext = () => {
    if (activeStep < documents.length - 1) {
      console.log("Переход к следующему документу");
      setActiveStep(prevStep => prevStep + 1);
      setChecked(false); // Сброс состояния checked на false
    } else {
      console.log("Переход к шагу подписи");
      setActiveStep(prevStep => prevStep + 1);
      setCanProceed(true);
    }
  };

  const handleSaveSignature = (signature) => {
    console.log("Подпись получена:", signature);
    setSignatures(prev => ({
      ...prev,
      signature,
    }));
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps[documents.length] = true;
    setCompletedSteps(newCompletedSteps);
    setCanProceed(true);
  };


  const handleFinish = async () => {
    console.log("Завершение процесса согласования");
    // Сохранение подписей и документов на сервере
    try {
      const response = await fetch('/api/saveDocuments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ signatures, documents }),
      });

      if (!response.ok) {
        throw new Error('Не удалось сохранить документы');
      }

      alert('Спасибо за согласие с документами и предоставление необходимой информации.');
      router.push('/');
    } catch (error) {
      console.error(error);
      alert('Произошла ошибка при сохранении документов.');
    }
  };

  return (
      <Container sx={{ mt: isMobile ? 4 : 0, width: isMobile ? '100%' : '200vh' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {documents.map((doc, index) => (
              <Step key={doc.title} completed={completedSteps[index]}>
                <StepLabel>{doc.title}</StepLabel>
              </Step>
          ))}
          <Step key="Подпись" completed={completedSteps[documents.length]}>
            <StepLabel>Signature</StepLabel>
          </Step>
        </Stepper>
        <Box sx={{ mt: 4 }}>
          {activeStep < documents.length ? (
              <DocumentStep
                  title={documents[activeStep].title}
                  content={documents[activeStep].content}
                  onAgree={handleAgree}
                  scrolledToEnd={setCanProceed}
                  isLastStep={false}
                  onNext={handleNext}
                  checked={checked} // Передача состояния checked
                  setChecked={setChecked} // Передача функции setChecked
              />
          ) : (
              <SignatureStep
                  onSaveSignature={handleSaveSignature}
                  onFinish={handleFinish}
                  canFinish={canProceed}
              />
          )}
        </Box>
      </Container>
  );
};

export default InvestorAgreement;

