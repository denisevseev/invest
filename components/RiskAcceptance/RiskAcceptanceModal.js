
import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, Button, Checkbox, FormControlLabel, useTheme, useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Contacts from "./Contacts";

const theme = createTheme({
    typography: {
        fontSize: 16, //  Базовый размер шрифта
    },
});

const RiskAcceptanceModal = ({ show }) => {
    const [open, setOpen] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    useEffect(() => {
        const isModalShown = localStorage.getItem('riskModalShown');
        if (!isModalShown) {
            setOpen(true);
        }
        if (show) {
            setOpen(true)
        }
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const handleAccept = () => {
        localStorage.setItem('riskModalShown', 'true');
        setOpen(false);
    }

    const handleAcceptChange = (event) => {
        setAccepted(event.target.checked);
    };

    return (
        <Modal open={open} onClose={handleClose} closeAfterTransition>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: isMobile ? '90%' : '80%', // Адаптация ширины для мобильных
                    height: isMobile ? '90%' : '80%', // Адаптация высоты для мобильных
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    overflowY: 'auto',
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                        mb: 4,
                    }}
                >
                    <img
                        src="/images/top_img.png"
                        alt="Top Image"
                        style={{
                            width: '105%', /* Ширина на 5% больше */
                            height: 'auto',
                            marginBottom: '2rem',
                            marginLeft: '-2.5%', /* Отступ слева на 2.5% влево */
                            display: 'block'
                        }}
                    />
                    <Typography variant={isMobile ? 'h5' : 'h4'} component="h2" gutterBottom sx={{ textDecoration: 'underline' }}>
                        {isMobile ? 'Chancen und Risiken bei einer Kapitalanlage in vorbörsliche Aktien' : 'CHANCEN UND RISIKEN BEI EINER KAPITALANLAGE IN VORBÖRSLICHE AKTIEN'}
                    </Typography>
                    <Box>
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: isMobile ? '1.8rem' : '2.5rem', // Адаптация размера шрифта для мобильных
                                marginTop: '1rem',
                                color: 'gray',
                            }}
                        >
                            Anlage zum Zeichnungsschein
                        </Typography>

                        <Typography
                            variant="h1"
                            component="h1"
                            sx={{
                                fontSize: isMobile ? '1.8rem' : '2.5rem', // Адаптация размера шрифта для мобильных
                                marginTop: '1rem',
                                color: 'gray',
                            }}
                        >
                            Victorum Capital Inc
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: isMobile ? '1.2rem' : '1.5rem', // Адаптация размера шрифта для мобильных
                                marginTop: '0.5rem',
                                color: 'gray',
                            }}
                        >
                            2102-58 Keefer Place
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: isMobile ? '1.2rem' : '1.5rem', // Адаптация размера шрифта для мобильных
                                color: 'gray',
                            }}
                        >
                            Vancouver, BC V6B 0B6
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: isMobile ? '1.2rem' : '1.5rem', // Адаптация размера шрифта для мобильных
                                color: 'gray',
                            }}
                        >
                            Canada
                        </Typography>
                    </Box>

                </Box>

                <Typography variant={isMobile ? 'h6' : 'h5'} gutterBottom sx={{ fontSize: isMobile ? '1.2rem' : '1.4rem' }}>
                    {isMobile ? 'Chancen und Risiken bei einer Kapitalanlage in vorbörsliche Aktien' : 'CHANCEN UND RISIKEN BEI EINER KAPITALANLAGE IN VORBÖRSLICHE AKTIEN'}
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    (Zusammenfassung der wichtigsten Risiken)
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Die Kapitalanlage in Aktien ist mit Chancen – aber natürlich auch mit Risiken verbunden. Es sollten daher bei einer Investmententscheidung diese Faktoren abgewogen und zusätzliche Risikohinweise berücksichtigt werden.
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Denn es kann keine außerordentlichen Chancen geben ohne Risiken auf der Gegenseite. Bitte bedenken Sie, dass es sich bei (vorbörslichen) Aktien nicht um Bundesschatzbriefe handelt, sondern um eine spekulative Anlage mit erheblichen Risiken. Diese können bis zu einem Totalverlust des Investments gehen.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ textDecoration: 'underline', fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                    Bitte lesen die folgenden Risikohinweise genau und überfliegen Sie diese nicht nur.
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold', color: 'black', fontSize: isMobile ? '1rem' : '1.4rem' }}>
                    Zusätzlich zu dieser Zusammenfassung können Sie eine detaillierte Übersicht der Risiken, die auch Ihr Investment in Aktien der betreffen können, auf den Seiten 6-11 Ihres Zeichnungsscheines entnehmen. Prüfen Sie auch diesen genau, bevor Sie eine Unterschrift tätigen.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                    1. Was sind Aktien?
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Aktien sind Beteiligungspapiere. Sie verkörpern die Beteiligung an dem Vermögen der Aktiengesellschaft und vermitteln, soweit die Stimmrechte nicht ausgeschlossen sind, auch Stimmrechte, die das Recht zur Beteiligung an der Aktionärsversammlung einschließen. Ein Ertrag wird erzielt, sofern eine Dividende (Gewinnbeteiligung) ausgezahlt wird und/oder zum Zeitpunkt des Verkaufs im Ergebnis ein Verkaufspreis erzielt wird, der über dem Anschaffungspreis liegt (Kurssteigerung).
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                    Eine Garantie für die Erzielung eines Ertrags mit der Kapitalanlage in Aktien kann nicht gegeben werden. Eine Kapitalanlage in Aktien ist immer eine Risikoanlage.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                    2.Risiken des Unternehmens (unternehmerisches Risiko), Insolvenzrisiko
                </Typography>

                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Mit dem Erwerb der Aktie beteiligt sich der Anleger an der wirtschaftlichen Entwicklung der
                    Aktiengesellschaft, er wird Aktionär und damit Gesellschafter. Das unternehmerische Risiko beschreibt die
                    Gefahr, dass sich die Entwicklung des Unternehmens anders darstellt als erwartet. Ein wirtschaftlicher
                    Niedergang der Gesellschaft wird in der Regel zu einem gravierenden Wertverlust der Aktien dieses
                    Unternehmens führen. Im Extremfall, insbesondere bei Insolvenz des Unternehmens, wird ein
                    Aktieninvestment vollständig wertlos. Im Fall der Liquidation der Gesellschaft oder der Insolvenz werden die
                    Aktionäre nach allen anderen Gläubigern der Gesellschaft bedient. Dies kann bedeuten, dass die Einlage
                    nicht oder nur zu einem geringen Bruchteil ausgezahlt werden kann.
                    Die Risiken des Unternehmens liegen in der allgemeinen wirtschaftlichen Entwicklung (Konjunktur) und der
                    besonderen Situation des Unternehmens. Diese Faktoren beeinflussen den Wert und damit den
                    Wiederverkaufspreis der Aktie.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                    3.Kursänderungsrisiko, Risiken der Rahmenbedingungen und der Marktpsychologie
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Aktienkurse weisen unvorhersehbare Schwankungen auf. Das allgemeine Marktrisiko einer Aktie ist das
                    Risiko einer Preisänderung, die der allgemeinen Tendenz am Aktienmarkt zuzuschreiben ist, und die in
                    keinem direkten Zusammenhang mit der wirtschaftlichen Situation des einzelnen Unternehmens steht. Dem
                    Marktrisiko unterliegen die Aktien aller Gesellschaften.
                    Parallel mit dem Gesamtmarkt kann demnach der Aktienkurs eines Unternehmens an der Börse sinken,
                    obwohl sich die wirtschaftliche Lage des Unternehmens nicht verschlechtert hat. So können Aktienkurse auf
                    breitere front in zweistelligen Prozentbeträgen einbrechen, ohne dass sich an der Substanz oder der
                    Ertragskraft des Unternehmens etwas geändert hätte.
                    Das unternehmensspezifische Risiko bezeichnet das Risiko einer rückläufigen Kursentwicklung bei einer Aktie
                    aufgrund von Faktoren, die unmittelbar oder mittelbar die emittierende Gesellschaft betreffen (vgl. auch
                    vorstehend unter „Unternehmerisches Risiko“). Ursachen einer solchen aktienspezifischen Kursentwicklung
                    können in der betriebswirtschaftlichen Situation der Gesellschaft liegen, können aber auch aus allgemeinen
                    volkswirtschaftlichen Faktoren resultieren.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                    4.Länderrisiko und Risiken der Rechtewahrnehmung, Informationsrisiko
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Bei dem Erwerb ausländischen Aktien muss der Anleger beachten, dass er über den Verkaufspreis der Aktie
                    bei einer Veräußerung gegebenenfalls erst nach längeren Fristen oder nach einer Umschreibung verfügen
                    kann. Erwirbt der Anleger ausländische Aktien oder unterhält er sein Wertpapierdepot im Ausland, so kann
                    er Kapitaltransferbeschränkungen ausgesetzt sein, die es ihm für kürzere oder längere Zeiträume unmöglich
                    machen, Dividenden oder den Verkaufserlös aus solchen Papieren aus dem betreffenden Land heraus zu
                    transferieren. Dieses Risiko besteht besonders bei Ländern, in denen keine politisch stabilen Verhältnisse
                    gegeben sind.
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Will der Anleger darüber hinaus seine Rechte gegenüber der Gesellschaft wahrnehmen, bewegt er sich in
                    einem ausländischen Rechtskreis und möglicherweise in einer fremden Sprache. Unter Umständen muss er
                    ausländische Anwälte und Gerichte zu Hilfe nehmen. Dies ist mit zusätzlichen Kosten und Schwierigkeiten
                    verbunden.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                    5.Währungsrisiko
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Ausländische Aktien repräsentieren häufig einen Wert in fremder Währung. Neben den der Aktie
                    immanenten Risiken trägt der Anleger zusätzlich das Währungsrisiko. Verluste können sich allein aus der
                    Tatsache ergeben oder vergrößern, dass sich die Aktienwährung gegenüber der heimischen Währung
                    verschlechtert.
                </Typography>

                <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                    6.Risiko eines Delisting
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Bei Aktien die an einer Börse oder einem anderen allgemein zugänglichen Sekundärmarkt
                    (Wiederverkaufsmarkt) gehandelt werden, besteht das Risiko einer Aussetzung des Handels bzw. sogar eines
                    Delistings. Während bei einer Aussetzung der Handel nur vorübergehende eingestellt wird, wird beim
                    Delisting die Aktiengesellschaft dauerhaft vom Handel entfernt, so dass die Aktien nicht mehr über die Börse
                    oder einem anderen allgemein zugänglichen Sekundärmarkt gehandelt werden können.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                    7.Liquiditätsrisiko
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Unter der Liquidität einer Anlage wird die Möglichkeit des Verkaufes zu marktgerechten Preisen verstanden.
                    Von einer ausreichenden Liquidität wird ausgegangen, wenn ein Anleger seine Kapitalanlage jederzeit an
                    einem Markt verkaufen kann, ohne dass dies zu spürbaren Preisänderungen führt. Unter dem
                    Liquiditätsrisiko wird das Risiko verstanden, dass der Anleger seine Anlage nicht zum gewünschten Zeitpunkt
                    und/oder nicht in der gewünschten Menge und/oder nur unter erheblichen Abschlägen vom Marktwert
                    veräußern muss oder überhaupt keinen Käufer findet. Dieses Risiko existiert häufig auch bei Nebenwerten,
                    auch wenn sie an einer Börse oder einem anderen allgemein zugänglichen Sekundärmarkt gehandelt
                    werden. Der Kreis der Interessenten ist oft so klein, dass der Verkauf solcher Aktien - wenn überhaupt - nur
                    unter schlechten Bedingungen möglich ist.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                    8.Risiko bei einer kreditfinanzierten Kapitalanlage
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Bei Aktien handelt es sich um spekulative Kapitalanlagen. Das zum Erwerb eingesetzte Kapital sollte daher
                    nur aus freien Mitteln aufgebracht werden. Eine Fremdfinanzierung ist nicht zu verantworten. Die Aktien
                    stellen keine geeignete Sicherheitsleistung für eine Kreditaufnahme dar. Sollte der Anleger dennoch
                    entgegen dieser Warnung einen Kredit aufnehmen, um den Erwerb von Aktien zu finanzieren, so muss er
                    damit rechnen, dass er bei dem Verlust eines Teils oder der Gesamtheit seiner Anlagesumme nicht nur den
                    Kredit in dieser Höhe aus anderen Einkommensquellen zurückführen muss, sondern darüber hinaus auch die
                    Zinsen und die Kosten für die Fremdfinanzierung. Das Risiko einer kreditfinanzierten Anlage in Aktien geht
                    damit über das Risiko des Totalverlustes hinaus. Sofern der Kredit sowie die Zinsen und die Kosten für die
                    Fremdfinanzierung nicht aus anderen Einkommensquellen zurückgeführt werden kann, besteht das Risiko
                    einer Privatinsolvenz.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                    9.Risiko der Transaktionskosten
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Transaktionen (u.a. Provisionen, Gebühren, Courtagen, Kapitalverkehrssteuern) verteuern den Ankaufspreis
                    und vermindern den Verkaufspreis. Sie schmälern damit die Gewinnchance und erhöhen umgekehrt das
                    Verlustrisiko.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                    10.Dividendenrisiko
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Die auf eine Aktie gezahlte Dividende richtet sich stark nach den erzielten Gewinnen der Gesellschaft. In
                    ertragsschwachen Jahren kann nur eine geringe oder überhaupt keine Dividende gezahlt werden. Über die
                    Zahlung einer Dividende wird jedes Jahr neu entschieden, eine frühere Zahlung stellt daher keine Garantie
                    für die weitere Zahlung von Dividenden dar. Auch bei guter Entwicklung muss dies nicht eine erhöhte
                    Dividende zur Folge haben.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                    11.Risiko der Nachzeichnung zum Schutz vor Vermögens- und Stimmrechtsverlusten
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Im Rahmen einer Kapitalerhöhung kann eine Aktiengesellschaft neue Aktien ausgeben. Den Aktionären steht
                    in diesem Fall in der Regel ein Bezugsrecht zu, sofern dieses nicht ausgeschlossen wurde. Durch die Ausgabe
                    neuer Aktien muss ein Altaktionär in Ausübung seines Bezugsrechts neue Aktien im Verhältnis seines
                    bisherigen Anteils an der Gesellschaft zeichnen, um seinen bisherigen Anteil an der Aktiengesellschaft und
                    damit das Verhältnis seines Gewinnanteils und seines Stimmrechts aufrecht zu erhalten. Steht dem
                    Altaktionär aufgrund der von ihm gehaltenen Aktien kein Bezugsrecht zu bzw. ist das ausgeschlossen, muss
                    der Altaktionär zu Aufrechterhaltung des Verhältnisses seines Gewinnanteils und seines Stimmrechts die
                    entsprechende Anzahl an Bezugsrechten dazukaufen oder eine entsprechende Anzahl den neu
                    ausgegebenen Aktien zeichnen.
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Mit der Zeichnung von Aktien in Ausübung des Bezugsrechts, der Zeichnung neuer Aktien bzw. des Erwerbs
                    von Bezugsrechten ist ein erneuter Kapitalaufwand seitens des Anlegers verbunden. Erbringt der Altaktionär
                    dieses erbeuten Kapitalaufwand nicht, verringert sich sein Anteil an der Aktiengesellschaft und damit auch
                    das Verhältnis seines Gewinnanteils und seines Stimmrechts.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                    12.Kursbestimmungsrisiko
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Der Aktienkurs von an der Börse oder einem anderen allgemein zugänglichen Sekundärmarkt
                    (Wiederverkaufsmarkt) gehandelten Aktien wird in der Regel mehrmals täglich bestimmt, so dass das Risiko
                    besteht, dass sich der Erwerbspreis zwischen der Auftragserteilung und der für den Erwerbspreis
                    maßgeblichen Ausführung für den Erwerber in erheblichem Ausmaß nachteilig verändern kann Selbiges gilt
                    auch im Fall der Veräußerung.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                    13.Aktiensplit
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Dabei handelt es sich um eine Aktienteilung indem eine höhere Stückzahl der Aktien durch eine „Spaltung“
                    der Aktien erreicht wird. Bei einem Aktiensplit von 1 zu 10 erhält z.B. ein Aktionär, der 1 Aktie besitzt, zehn
                    weitere Aktien ohne Gegenleistung. Dies ist aber keine Ausgabe von Gratisaktien, da bei Nennwertaktien
                    eine dem Split-Verhältnis angepasste Herabsetzung des Nennwertes erfolgt. Bei einer € 50,- Aktie wäre der
                    Nennwert dann nur noch € 5,-. Entsprechend verringert sich dann auch in der Regel der Kurs der einzelnen
                    Aktie.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
                    14.Unvermeidbarkeit der vorgenannten Risiken
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Die vorgenannten Risiken bestehen in jedem Fall. Sie lassen sich nicht verringern oder vermeiden. Diese
                    Risiken lassen auch nicht ausschließen. Sofern Ihnen jemand gegenteilige Angaben macht, ist dies nicht
                    richtig.
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }}>
                    Diese Übersicht erhebt keinen Anspruch auf Vollständigkeit.
                </Typography>
                <Contacts/>

                <FormControlLabel
                    control={<Checkbox checked={accepted} onChange={handleAcceptChange} />}
                    label={isMobile ? 'I agree to the terms and conditions' : 'Ich stimme den Geschäftsbedingungen zu'}
                    sx={{ mt: 2, fontSize: isMobile ? '1rem' : '1.5rem' }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAccept}
                    disabled={!accepted}
                    sx={{ mt: 2 }}
                >
                    {isMobile ? 'Accept' : 'Akzeptieren'}
                </Button>
            </Box>
        </Modal>
    );
};

export default RiskAcceptanceModal;