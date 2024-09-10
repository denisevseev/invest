import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import {Button} from "@mui/material";
import {observer} from "mobx-react-lite";
import store from './../stores/userStore'

// Стили для PDF-документа
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: 30,
        fontSize: 12,
    },
    section: {
        marginBottom: 10,
        padding: 10,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        textDecoration: 'underline',
    },
    subtitle: {
        fontSize: 18,
        marginTop: 10,
        textDecoration: 'underline',
    },

    subtitleFirst: {
        fontSize: 22, // Увеличен размер для подзаголовка
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
        marginBottom: 5,
    },
    text: {
        margin: 10,
        fontSize: 12,
        textAlign: 'justify',
    },
    bold: {
        fontWeight: 'bold',
    },
    grayText: {
        color: 'gray',
    },
});


const styles2 = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 12,
        margin: '3rem',
    },
    section: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '5rem',
        padding: '3rem'
    },
    box: {
        width: '45%', // Adjust width for spacing
        textAlign: 'center',
        padding: 20,
        borderRadius: 4,
        margin: '5rem',
    },
    bold: {
        fontWeight: 'bold',
    },
    text: {
        fontSize: 12,
    },
});

// Специальные стили только для определенной секции
const specialStyles = StyleSheet.create({
    centeredTitle: {
        fontSize: 24,
        textAlign: 'center',
        textDecoration: 'underline',
        fontWeight: 'bold',
    },
    centeredSubtitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
        marginTop: 20
    },
    centeredText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'gray',
        marginBottom: 3,
    },
});


// Компонент PDF-документа
const RiskPdf = () => (
    <Document>
        <Page style={styles.page}>
            <View style={styles.section}>
                <Text style={specialStyles.centeredTitle}>
                    CHANCEN UND RISIKEN BEI EINER KAPITALANLAGE IN VORBÖRSLICHE AKTIEN
                </Text>
                <Text style={specialStyles.centeredSubtitle}>
                    Hinweise zur Wertpapierzeichnung
                </Text>
                <Text style={specialStyles.centeredSubtitle}>
                    Victorum Capital Inc
                </Text>
                <Text style={specialStyles.centeredText}>
                    2102-58 Keefer Place
                </Text>
                <Text style={specialStyles.centeredText}>
                    Vancouver, BC V6B 0B6
                </Text>
                <Text style={specialStyles.centeredText}>
                    Canada
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Zusammenfassung der wichtigsten Risiken</Text>
                <Text style={styles.text}>
                    Die Kapitalanlage in Aktien ist mit Chancen – aber natürlich auch mit Risiken verbunden. Es sollten
                    daher bei einer Investmententscheidung diese Faktoren abgewogen und zusätzliche Risikohinweise
                    berücksichtigt werden.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>1. Was sind Aktien?</Text>
                <Text style={styles.text}>
                    Aktien sind Beteiligungspapiere. Sie verkörpern die Beteiligung an dem Eigenkapital der
                    Aktiengesellschaft und vermitteln, soweit die Stimmrechte nicht ausgeschlossen sind, auch
                    Stimmrechte, die das Recht zur Beteiligung an der Aktionärsversammlung einschließen. Ein Ertrag wird
                    erzielt, sofern eine Dividende (Gewinnbeteiligung) ausgezahlt wird und/oder zum Zeitpunkt des
                    Verkaufs im Ergebnis ein Verkaufspreis erzielt wird, der über dem Anschaffungspreis liegt
                    (Kurssteigerung).
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>2. Risiken des Unternehmens (unternehmerisches Risiko),
                    Insolvenzrisiko</Text>
                <Text style={styles.text}>
                    Mit dem Erwerb der Aktie beteiligt sich der Anleger an der wirtschaftlichen Entwicklung der
                    Aktiengesellschaft, er wird Aktionär und damit Gesellschafter. Das unternehmerische Risiko
                    beschreibt die
                    Gefahr, dass sich die Entwicklung des Unternehmens anders darstellt als erwartet. Ein
                    wirtschaftlicher
                    Niedergang der Gesellschaft wird in der Regel zu einem gravierenden Wertverlust der Aktien dieses
                    Unternehmens führen. Im Extremfall, insbesondere bei Insolvenz des Unternehmens, wird ein
                    Aktieninvestment vollständig wertlos. Im Fall der Liquidation der Gesellschaft oder der Insolvenz
                    werden die
                    Aktionäre nach allen anderen Gläubigern der Gesellschaft bedient. Dies kann bedeuten, dass die
                    Einlage
                    nicht oder nur zu einem geringen Bruchteil ausgezahlt werden kann.
                    Die Risiken des Unternehmens liegen in der allgemeinen wirtschaftlichen Entwicklung (Konjunktur) und
                    der
                    besonderen Situation des Unternehmens. Diese Faktoren beeinflussen den Wert und damit den
                    Wiederverkaufspreis der Aktie.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>3. Kursänderungsrisiko, Risiken der Rahmenbedingungen und der
                    Marktpsychologie</Text>
                <Text style={styles.text}>
                    Aktienkurse weisen unvorhersehbare Schwankungen auf. Das allgemeine Marktrisiko einer Aktie ist das
                    Risiko einer Preisänderung, die der allgemeinen Tendenz am Aktienmarkt zuzuschreiben ist, und die in
                    keinem direkten Zusammenhang mit der wirtschaftlichen Situation des einzelnen Unternehmens steht.
                    Dem
                    Marktrisiko unterliegen die Aktien aller Gesellschaften.
                    Parallel mit dem Gesamtmarkt kann demnach der Aktienkurs eines Unternehmens an der Börse sinken,
                    obwohl sich die wirtschaftliche Lage des Unternehmens nicht verschlechtert hat. So können
                    Aktienkurse auf
                    breitere front in zweistelligen Prozentbeträgen einbrechen, ohne dass sich an der Substanz oder der
                    Ertragskraft des Unternehmens etwas geändert hätte.
                    Das unternehmensspezifische Risiko bezeichnet das Risiko einer rückläufigen Kursentwicklung bei
                    einer Aktie
                    aufgrund von Faktoren, die unmittelbar oder mittelbar die emittierende Gesellschaft betreffen (vgl.
                    auch
                    vorstehend unter „Unternehmerisches Risiko“). Ursachen einer solchen aktienspezifischen
                    Kursentwicklung
                    können in der betriebswirtschaftlichen Situation der Gesellschaft liegen, können aber auch aus
                    allgemeinen
                    volkswirtschaftlichen Faktoren resultieren.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>4. Länderrisiko und Risiken der Rechtewahrnehmung,
                    Informationsrisiko</Text>
                <Text style={styles.text}>
                    Bei dem Erwerb ausländischen Aktien muss der Anleger beachten, dass er über den Verkaufspreis der
                    Aktie
                    bei einer Veräußerung gegebenenfalls erst nach längeren Fristen oder nach einer Umschreibung
                    verfügen
                    kann. Erwirbt der Anleger ausländische Aktien oder unterhält er sein Wertpapierdepot im Ausland, so
                    kann
                    er Kapitaltransferbeschränkungen ausgesetzt sein, die es ihm für kürzere oder längere Zeiträume
                    unmöglich
                    machen, Dividenden oder den Verkaufserlös aus solchen Papieren aus dem betreffenden Land heraus zu
                    transferieren. Dieses Risiko besteht besonders bei Ländern, in denen keine politisch stabilen
                    Verhältnisse
                    gegeben sind.
                </Text>
                <Text style={styles.text}>
                    Will der Anleger darüber hinaus seine Rechte gegenüber der Gesellschaft wahrnehmen, bewegt er sich
                    in
                    einem ausländischen Rechtskreis und möglicherweise in einer fremden Sprache. Unter Umständen muss er
                    ausländische Anwälte und Gerichte zu Hilfe nehmen. Dies ist mit zusätzlichen Kosten und
                    Schwierigkeiten
                    verbunden.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>5. Währungsrisiko</Text>
                <Text style={styles.text}>
                    Ausländische Aktien repräsentieren häufig einen Wert in fremder Währung. Neben den der Aktie
                    immanenten Risiken trägt der Anleger zusätzlich das Währungsrisiko. Verluste können sich allein aus
                    der
                    Tatsache ergeben oder vergrößern, dass sich die Aktienwährung gegenüber der heimischen Währung
                    verschlechtert.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>6. Risiko eines Delisting</Text>
                <Text style={styles.text}>
                    Bei Aktien die an einer Börse oder einem anderen allgemein zugänglichen Sekundärmarkt
                    (Wiederverkaufsmarkt) gehandelt werden, besteht das Risiko einer Aussetzung des Handels bzw. sogar
                    eines
                    Delistings. Während bei einer Aussetzung der Handel nur vorübergehende eingestellt wird, wird beim
                    Delisting die Aktiengesellschaft dauerhaft vom Handel entfernt, so dass die Aktien nicht mehr über
                    die Börse
                    oder einem anderen allgemein zugänglichen Sekundärmarkt gehandelt werden können.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>7. Liquiditätsrisiko</Text>
                <Text style={styles.text}>
                    Unter der Liquidität einer Anlage wird die Möglichkeit des Verkaufes zu marktgerechten Preisen
                    verstanden.
                    Von einer ausreichenden Liquidität wird ausgegangen, wenn ein Anleger seine Kapitalanlage jederzeit
                    an
                    einem Markt verkaufen kann, ohne dass dies zu spürbaren Preisänderungen führt. Unter dem
                    Liquiditätsrisiko wird das Risiko verstanden, dass der Anleger seine Anlage nicht zum gewünschten
                    Zeitpunkt
                    und/oder nicht in der gewünschten Menge und/oder nur unter erheblichen Abschlägen vom Marktwert
                    veräußern muss oder überhaupt keinen Käufer findet. Dieses Risiko existiert häufig auch bei
                    Nebenwerten,
                    auch wenn sie an einer Börse oder einem anderen allgemein zugänglichen Sekundärmarkt gehandelt
                    werden. Der Kreis der Interessenten ist oft so klein, dass der Verkauf solcher Aktien - wenn
                    überhaupt - nur
                    unter schlechten Bedingungen möglich ist.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>8. Risiko bei einer kreditfinanzierten Kapitalanlage</Text>
                <Text style={styles.text}>
                    Bei Aktien handelt es sich um spekulative Kapitalanlagen. Das zum Erwerb eingesetzte Kapital sollte
                    daher
                    nur aus freien Mitteln aufgebracht werden. Eine Fremdfinanzierung ist nicht zu verantworten. Die
                    Aktien
                    stellen keine geeignete Sicherheitsleistung für eine Kreditaufnahme dar. Sollte der Anleger dennoch
                    entgegen dieser Warnung einen Kredit aufnehmen, um den Erwerb von Aktien zu finanzieren, so muss er
                    damit rechnen, dass er bei dem Verlust eines Teils oder der Gesamtheit seiner Anlagesumme nicht nur
                    den
                    Kredit in dieser Höhe aus anderen Einnahmequelle zurückführen muss, sondern darüber hinaus auch die
                    Zinsen und die Kosten für die Fremdfinanzierung. Das Risiko einer kreditfinanzierten Anlage in
                    Aktien geht
                    damit über das Risiko des Totalverlustes hinaus. Sofern der Kredit sowie die Zinsen und die Kosten
                    für die
                    Fremdfinanzierung nicht aus anderen Einnahmequelle zurückgeführt werden kann, besteht das Risiko
                    einer Privatinsolvenz.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>9. Risiko der Transaktionskosten</Text>
                <Text style={styles.text}>
                    Transaktionen (u.a. Provisionen, Gebühren, Courtagen, Kapitalverkehrssteuern) verteuern den
                    Ankaufspreis
                    und vermindern den Verkaufspreis. Sie schmälern damit die Gewinnchance und erhöhen umgekehrt das
                    Verlustrisiko.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>10. Dividendenrisiko</Text>
                <Text style={styles.text}>
                    Die auf eine Aktie gezahlte Dividende richtet sich stark nach den erzielten Gewinnen der
                    Gesellschaft. In
                    ertragsschwachen Jahren kann nur eine geringe oder überhaupt keine Dividende gezahlt werden. Über
                    die
                    Zahlung einer Dividende wird jedes Jahr neu entschieden, eine frühere Zahlung stellt daher keine
                    Garantie
                    für die weitere Zahlung von Dividenden dar. Auch bei guter Entwicklung muss dies nicht eine erhöhte
                    Dividende zur Folge haben.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>11. Risiko der Nachzeichnung zum Schutz vor Vermögens- und
                    Stimmrechtsverlusten</Text>
                <Text style={styles.text}>
                    Im Rahmen einer Kapitalerhöhung kann eine Aktiengesellschaft neue Aktien ausgeben. Den Aktionären
                    steht
                    in diesem Fall in der Regel ein Bezugsrecht zu, sofern dieses nicht ausgeschlossen wurde. Durch die
                    Ausgabe
                    neuer Aktien muss ein Altaktionär in Ausübung seines Bezugsrechts neue Aktien im Verhältnis seines
                    bisherigen Anteils an der Gesellschaft zeichnen, um seinen bisherigen Anteil an der
                    Aktiengesellschaft und
                    damit das Verhältnis seines Gewinnanteils und seines Stimmrechts aufrechtzuerhalten. Steht dem
                    Altaktionär aufgrund der von ihm gehaltenen Aktien kein Bezugsrecht zu bzw. ist das ausgeschlossen,
                    muss
                    der Altaktionär zur Aufrechterhaltung des Verhältnisses seines Gewinnanteils und seines Stimmrechts
                    die
                    entsprechende Anzahl an Bezugsrechten dazukaufen oder eine entsprechende Anzahl den neu
                    ausgegebenen Aktien zeichnen.
                </Text>
                <Text style={styles.text}>
                    Mit der Zeichnung von Aktien in Ausübung des Bezugsrechts, der Zeichnung neuer Aktien bzw. des
                    Erwerbs
                    von Bezugsrechten ist ein erneuter Kapitalaufwand seitens des Anlegers verbunden. Erbringt der
                    Altaktionär
                    dieses erneute Kapitalaufwand nicht, verringert sich sein Anteil an der Aktiengesellschaft und damit
                    auch
                    das Verhältnis seines Gewinnanteils und seines Stimmrechts.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>12. Kursbestimmungsrisiko</Text>
                <Text style={styles.text}>
                    Der Aktienkurs von an der Börse oder einem anderen allgemein zugänglichen Sekundärmarkt
                    (Wiederverkaufsmarkt) gehandelten Aktien wird in der Regel mehrmals täglich bestimmt, so dass das
                    Risiko
                    besteht, dass sich der Erwerbspreis zwischen der Auftragserteilung und der für den Erwerbspreis
                    maßgeblichen Ausführung für den Erwerber in erheblichem Ausmaß nachteilig verändern kann. Selbiges
                    gilt
                    auch im Fall der Veräußerung.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>13. Aktiensplit</Text>
                <Text style={styles.text}>
                    Dabei handelt es sich um eine Aktienteilung, indem eine höhere Stückzahl der Aktien durch eine
                    „Spaltung“
                    der Aktien erreicht wird. Bei einem Aktiensplit von 1 zu 10 erhält z.B. ein Aktionär, der 1 Aktie
                    besitzt, zehn
                    weitere Aktien ohne Gegenleistung. Dies ist aber keine Ausgabe von Gratisaktien, da bei
                    Nennwertaktien
                    eine dem Split-Verhältnis angepasste Herabsetzung des Nennwertes erfolgt. Bei einer € 50,- Aktie
                    wäre der
                    Nennwert dann nur noch € 5,-. Entsprechend verringert sich dann auch in der Regel der Kurs der
                    einzelnen
                    Aktie.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>14. Unvermeidbarkeit der vorgenannten Risiken</Text>
                <Text style={styles.text}>
                    Die vorgenannten Risiken bestehen in jedem Fall. Sie lassen sich nicht verringern oder vermeiden.
                    Diese
                    Risiken lassen sich auch nicht ausschließen. Sofern Ihnen jemand gegenteilige Angaben macht, ist
                    dies nicht
                    richtig.
                </Text>
                <Text style={styles.text}>
                    Diese Übersicht erhebt keinen Anspruch auf Vollständigkeit.
                </Text>
            </View>
            <div style={{display: "flex"}}>
                <View style={styles2.section}>
                    <View style={styles2.box}>
                        <Text style={[styles2.text, styles2.bold]}>2102-58 Keefer Place</Text>
                        <Text style={styles2.text}>Vancouver, BC V6B 0B6</Text>
                        <Text style={styles2.text}>Canada</Text>
                    </View>

                    <View style={styles2.box}>
                        <Text style={[styles2.text, styles2.bold]}>Phone: +1 604-260-0738</Text>
                        <Text style={styles2.text}>Fax: +1 604-260-0738</Text>
                        <Text style={styles2.text}>Email: contact@victorum-capital.com</Text>
                        <Text style={styles2.text}>Internet: www.victorum-capital.com</Text>
                    </View>

                    <View style={styles2.box}>
                        <Text style={[styles2.text, styles2.bold]}>TransferWise Europe SA</Text>
                        <Text style={styles2.text}>SWIFT/BIC: TRWIBEB1XXX</Text>
                        <Text style={styles2.text}>IBAN: BE79 9671 7187 1333</Text>
                    </View>
                    <View style={styles2.box}>
                        <Text style={[styles2.text, styles2.bold]}>TD Canada Trust</Text>
                        <Text style={styles2.text}>SWIFT/BIC: TDOMCATTOR</Text>
                        <Text style={styles2.text}>BLZ/Wire: 53784-004</Text>
                        <Text style={styles2.text}>Konto-Nr: 5017003</Text>
                    </View>
                </View>
            </div>

        </Page>
    </Document>
);

// Компонент для генерации и скачивания PDF
const GeneratePDFButton = () => {
    const lang = store.lang;
    let name = store.lang === 'de' ? '2024_VICCAPITAL_ChancenRisiken_Wertpap.vorbörslich.pdf': '2024_VICCAPITAL_OpportunitiesRisks_preIPO.pdf'
    return (
        <div>
            <PDFDownloadLink document={<RiskPdf/>} fileName={name}>
                {({blob, url, loading, error}) => (
                    <Button sx={{mt: lang === 'de' ? 2 : 4.5}}  color="primary" href={url}
                            download={name}>
                        {lang === 'de' ? 'PDF herunterladen' : 'Download PDF'}
                    </Button>
                )}
            </PDFDownloadLink>
        </div>
    )
}


export default observer(GeneratePDFButton);
