import React from 'react';
import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';

const ResponsiveGrid = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                padding: isMobile ? theme.spacing(2) : theme.spacing(4),
                textAlign: 'center',
            }}
            mt={8}
        >
            <Grid container spacing={4}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
                        FAQ
                    </Typography>
                    <Box
                        component="img"
                        src="https://fineproxy.org/wp-content/uploads/2023/05/Frequently-Asked-Questions-FAQ.jpg" // Replace with your image path
                        alt="Sample"
                        sx={{
                            display: 'block',
                            width: isMobile ? '100%' : '85%',
                            maxHeight:  '400px', // Ограничение высоты до 400 пикселей для компьютеров
                            marginLeft: !isMobile && '12rem',
                            objectFit: 'cover',
                        }}
                    />
                </Grid>
                <Grid ml={ !isMobile && 25} item xs={12} md={ isMobile ? 6 : 10}>
                    <Typography variant="body1" align="left" sx={{ color: 'text.secondary' }}>
                        <strong>1. Wofür kann ich diese Plattform verwenden?</strong><br />
                        Unsere Plattform bietet eine sichere und benutzerfreundliche Oberfläche zur Verwaltung Ihres Anfrageprozesses zur Zeichnung von Wertpapieren der Victorum Capital Inc. und zum Ändern Ihres Passworts. Sie stellt sicher, dass Ihre persönlichen Informationen sicher bleiben und hilft Ihnen, Ihre Anmeldedaten einfach zu aktualisieren.<br /><br />

                        <strong>2. Wie ändere ich mein Passwort?</strong><br />
                        Um Ihr Passwort zu ändern, navigieren Sie zum Abschnitt „Passwort ändern“ in Ihren Kontoeinstellungen. Geben Sie Ihr aktuelles Passwort ein, dann ein neues Passwort und bestätigen Sie es. Stellen Sie sicher, dass das neue Passwort mindestens 8 Zeichen lang ist und mit der Bestätigung übereinstimmt.<br /><br />

                        <strong>3. Was soll ich tun, wenn ich mein Passwort vergessen habe?</strong><br />
                        Wenn Sie Ihr Passwort vergessen haben, verwenden Sie den Link „Passwort vergessen“ auf der Anmeldeseite. Folgen Sie den Anweisungen, um Ihr Passwort über die mit Ihrem Konto verknüpfte E-Mail-Adresse zurückzusetzen.<br /><br />

                        <strong>4. Was sind die Anforderungen an ein starkes Passwort?</strong><br />
                        Ein starkes Passwort sollte mindestens 8 Zeichen lang sein und eine Mischung aus Großbuchstaben, Kleinbuchstaben, Zahlen und Sonderzeichen enthalten. Vermeiden Sie leicht zu erratende Informationen wie gängige Wörter oder persönliche Details.<br /><br />

                        <strong>5. Warum wird mein neues Passwort nicht akzeptiert?</strong><br />
                        Stellen Sie sicher, dass Ihr neues Passwort die Mindestlängenanforderung erfüllt und mit dem Bestätigungsfeld übereinstimmt. Wenn das Passwort immer noch nicht akzeptiert wird, überprüfen Sie, ob es alle Komplexitätsanforderungen erfüllt, und versuchen Sie es erneut.<br /><br />

                        <strong>6. Wie oft sollte ich mein Passwort ändern?</strong><br />
                        Aus Sicherheitsgründen wird empfohlen, Ihr Passwort alle 3 bis 6 Monate zu ändern oder sofort, wenn Sie vermuten, dass Ihr Konto kompromittiert wurde.<br /><br />

                        <strong>7. Was soll ich tun, wenn ich beim Ändern meines Passworts auf einen Fehler stoße?</strong><br />
                        Wenn Sie auf einen Fehler stoßen, überprüfen Sie, ob Sie alle erforderlichen Felder korrekt ausgefüllt haben und ob Ihr neues Passwort die notwendigen Kriterien erfüllt. Wenn das Problem weiterhin besteht, wenden Sie sich an unser Support-Team.<br /><br />

                        <strong>8. Wie kann ich den Support für weitere Unterstützung kontaktieren?</strong><br />
                        Wenn Sie weitere Unterstützung benötigen, können Sie unser Support-Team unter 001 604-260-0738 kontaktieren. Wir sind hier, um Ihnen bei allen Problemen oder Fragen zu helfen.<br /><br />

                        <strong>9. Sind meine persönlichen Informationen sicher?</strong><br />
                        Ja, Ihre persönlichen Informationen werden mit branchenüblichen Verschlüsselungs- und Sicherheitsmaßnahmen geschützt. Wir nehmen Ihre Privatsphäre ernst und stellen sicher, dass Ihre Daten mit größter Sorgfalt behandelt werden.<br /><br />

                        <strong>10. Wo finde ich weitere Informationen zu Ihren Sicherheitsrichtlinien?</strong><br />
                        Detaillierte Informationen zu unseren Sicherheitsrichtlinien finden Sie in den Abschnitten „Datenschutzrichtlinie“ und „Nutzungsbedingungen“ auf unserer Website. Wenn Sie spezielle Fragen haben, können Sie sich gerne an unser Support-Team wenden. Sie können uns dazu einfach eine E-Mail an support@victorum-capital.com senden oder uns unter 001 604-260-0738 anrufen!
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ResponsiveGrid;
