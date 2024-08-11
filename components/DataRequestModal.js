import React from 'react';
import { Modal, Box, Typography, Button, Grid } from '@mui/material';
import store from './../stores/userStore';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';

const DataRequestModal = () => {
    const router = useRouter();
    return (
        <Modal
            open={store.DataRequestModal}
            onClose={() => store.DataRequestModal = false}
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
                            Eingeschränkte Funktionalität
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" align="center">
                            Um die volle Funktionalität unserer Plattform nutzen zu können, benötigen wir von Ihnen noch einige zusätzliche Informationen. Diese Informationen sind von entscheidender Bedeutung, um Ihre Identität zu verifizieren, Ihre Investitionsziele zu verstehen und sicherzustellen, dass Sie die besten Möglichkeiten zur Maximierung Ihrer Gewinne erhalten.
                        </Typography>
                        <Typography variant="body1" align="center" mt={2}>
                            Indem Sie uns die fehlenden Daten zur Verfügung stellen, eröffnen Sie sich die Tür zu einer Welt voller finanzieller Möglichkeiten. Sie werden in der Lage sein, in Projekte zu investieren, die Ihrem Profil und Ihren Erwartungen entsprechen, und die Chance nutzen, von steigenden Dividenden und Kapitalzuwächsen zu profitieren.
                        </Typography>
                        <Typography variant="body1" align="center" mt={2}>
                            Dieser letzte Schritt ist nicht nur ein formaler Abschluss, sondern auch der entscheidende Moment, in dem Sie vom Interessenten zum aktiven Investor werden. Stellen Sie sich vor, Sie könnten noch heute Ihre ersten Investitionen tätigen und den Grundstein für Ihre finanzielle Zukunft legen.
                        </Typography>
                        <Typography variant="body1" align="center" mt={2}>
                            Vertrauen Sie uns – Ihr Erfolg ist unser Ziel. Lassen Sie uns gemeinsam diesen letzten Schritt gehen und sicherstellen, dass Sie bestens gerüstet sind, um das Potenzial Ihrer Investitionen voll auszuschöpfen.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => router.push('/more-info')}
                        >
                            Weitere Daten bereitstellen
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            onClick={() => store.DataRequestModal = false}
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
