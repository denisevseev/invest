import React from 'react';
import { Modal, Box, Typography, Button, Grid } from '@mui/material';
import store from './../stores/userStore';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';

const DataRequestModal = () => {
    const router = useRouter();
    const handle = () => {
        router.push('/more-info');
    };

    return (
        <Modal
            open={store.DataRequestModal}
            onClose={() => (store.DataRequestModal = false)}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: 500,
                    maxHeight: '90vh', // Ограничиваем высоту окна
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    overflowY: 'auto', // Добавляем прокрутку по вертикали
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Einfach mal anonym und unverbindlich schauen? Kein Problem!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" align="center">
                            Für uns ist es wichtig, dass der Kreis unserer Investoren die Möglichkeiten sich alles im Vorfeld anzuschauen.
                        </Typography>
                        <Typography variant="body1" align="center" mt={2}>
                            Einfach, unkompliziert und gerne auch anonym!
                        </Typography>
                        <Typography variant="body1" align="center" mt={2}>
                            Bei dem nicht-öffentlichen Angebot der Wertpapiere der Victorum Capital Inc., deren Bezug über diese Online-Plattform. Um die volle Funktionalität unserer Plattform nutzen zu können, benötigen wir von Ihnen noch einige zusätzliche Informationen. Diese Informationen sind von entscheidender Bedeutung, um Ihre Identität zu verifizieren, Ihre Investitionsziele zu verstehen und sicherzustellen, dass Sie die richtigen Informationen und Hinweise erhalten.
                        </Typography>
                        <Typography variant="body1" align="center" mt={2}>
                            Erst nachdem Sie sich informiert und anschließend Ihre persönlichen Daten eingefügt haben, können Sie diesen Bereich unserer Webseite vollständig nutzen und Wertpapierkäufe initiieren.
                        </Typography>
                        <Typography variant="body1" align="center" mt={2}>
                            Öffnen Sie einfach und unkompliziert sich die Tür zu einer Welt voller neuer Möglichkeiten und erhalten die Chance von der zukünftigen Entwicklung der Victorum Capital Inc. zu profitieren und am geplanten Börsengang sowie möglichen Dividenden zu partizipieren.
                        </Typography>
                        <Typography variant="body1" align="center" mt={2}>
                            Dieser letzte Schritt ist nicht der formale Abschluss einer Geschäftsbeziehung und auch keine Zeichnung von Wertpapieren der Victorum Capital Inc. Bei dem Antrag auf Zeichnung der Wertpapiere handelt es sich um einen separaten Bereich auf dieser Webseite, welcher besonders gekennzeichnet ist.
                        </Typography>
                        <Typography variant="body1" align="center" mt={2}>
                            Sie haben Fragen? Sie benötigen weitere Informationen?
                        </Typography>
                        <Typography variant="body1" align="center" mt={2}>
                            Kein Problem - nehmen Sie per Email unter support@victorum-capital.com mit uns Kontakt auf oder wählen Sie +1 604-260-0738 – wir freuen uns auf Ihren Anruf!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button onClick={handle} sx={{ fontSize: '13px' }}>
                            Weitere Daten bereitstellen
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            onClick={() => (store.DataRequestModal = false)}
                            sx={{ fontSize: '13px' }}
                        >
                            Schließen
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default observer(DataRequestModal);
