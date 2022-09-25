import { Dialog, DialogContent, DialogContentText, DialogTitle, Link } from '@material-ui/core';

export function About({ onClose, open }: { onClose: () => void; open: boolean }) {
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog onClose={handleClose} aria-labelledby="about-dialog" open={open} maxWidth={'xl'}>
      <DialogTitle id="about-dialog">Über Julala</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Das Zuckerbankett, der Kampf eines Wals mit einem Drachen, spektakuläre Feuerwerke und ein ganzer sich
          bewegender Berg als Theaterkulisse – auf den alten Kupferstichen ist so viel zu entdecken. Nimm die kleinen
          Details und setze sie zu etwas Neuem zusammen. Mit Julala kannst du dein eigenes Mandala erstellen, speichern,
          ausdrucken und im Anschluss ausmalen.
        </DialogContentText>
        <DialogContentText>
          Nebenbei erfährst du etwas über eine wichtige politische Hochzeit im 16. Jahrhundert in Düsseldorf und
          darüber, wie man in der Renaissance Feste feierte.
        </DialogContentText>
        <DialogContentText>
          Alle Schwarz-Weiß-Bilder und die erstellten Julalas sind frei lizenziert und können vielfältig genutzt werden,
          z. B. für den Unterricht, für museumspädagogische Angebote oder einfach für private Deko. Verweise gern auf
          uns (Liane Hellmund, Anne und Gerd) und nutze den Hashtag <i>#julala</i>
        </DialogContentText>
      </DialogContent>
      <DialogTitle>Der Hintergrund:</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Das Stadtmuseum Düsseldorf hat im Rahmen des Kultur-Hackathons Coding da Vinci Nieder.Rhein.Land 2021 die
          Objektdatensätze zur „Fürstlich Jülich´sche Hochzeit“ bereitgestellt (Lizenz CC BY 4.0 Stadtmuseum
          Düsseldorf).
        </DialogContentText>
        <DialogContentText>
          Die Kupferstiche stammen aus der Werkstatt von Franz Hogenberg und zeigen die Ereignisse rund um die Hochzeit
          von Herzog Johann Wilhelm von Jülich-Kleve-Berg mit der Markgräfin Jakobe von Baden im Juni 1585. Es war DAS
          politische Großereignis im 16. Jahrhundert in Düsseldorf. Acht Tage lang wurde die Hochzeit mit den
          unterschiedlichsten Veranstaltungen gefeiert. Über 1.000 adelige Gäste waren geladen.
        </DialogContentText>
        <DialogContentText>
          Die Grafiken überliefern die Hochzeitsfeier für die Nachwelt. Zudem enthalten sie die ältesten Stadt- und
          Schlossansichten Düsseldorfs.
        </DialogContentText>
      </DialogContent>
      <DialogTitle>Die Idee:</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Die Kupferstiche zeigen eine Fülle von Details und fantastischen Szenen. Ich hatte sofort die Idee, daraus ein
          Mal- oder Wimmelbuch für Kinder von 10 bis 100 zu machen. Damit möchte ich einen niederschwelligen Zugang zu
          den kulturhistorisch sehr bedeutsamen Kupferstichen aus dem Jahr 1585 schaffen.
        </DialogContentText>
        <DialogContentText>
          Aber das Museum wünschte sich auch einen Weg in die digitale Welt. Mit „Julala“ gibt es jetzt eine
          Webanwendung, mit der man eigene Mandalas kreieren kann. So entsteht immer neues Material für malfreudige
          Menschen, für Lehrer:innen, für Museumspädagog:innen …
        </DialogContentText>
        <DialogContentText>
          Ich hoffe sehr, dass das Stadtmuseum Düsseldorf Spaß an dem Entstandenen findet und es weiter nutzt. Denkbar
          ist auch eine Nutzung durch das Theatermuseum, weil die Hochzeit gleichzeitig als Beginn der Theatergeschichte
          in Düsseldorf angesehen wird.
        </DialogContentText>
        <DialogContentText>
          Alle für das Projekt erstellten Vektorgrafiken wurden mit einer CC BY-SA 4.0 Lizenz versehen.
        </DialogContentText>
      </DialogContent>
      <DialogTitle>Die Kooperation:</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Danke an Anne und Gerd! Sie haben 2021 die Webanwendung Plantala im Rahmen des Kulturhackathons Coding da
          Vinci Niedersachsen und eines anschließenden Stipendiums entwickelt. Mit Julala gibt es nun die erste
          gewünschte Nachnutzung ihrer Applikation. Gerd und Anne übernahmen die Einbindung der Schwarz-Weiß-Grafiken in
          ihre Software. (Folge den beiden auf{' '}
          <Link href="https://twitter.com/digiwako" target="_blank" rel="noreferrer">
            Twitter
          </Link>{' '}
          und{' '}
          <Link href="https://www.instagram.com/digitalwarenkombinat" target="_blank" rel="noreferrer">
            Instagram
          </Link>{' '}
          unter <i> @Digitalwarenkombinat </i>)
        </DialogContentText>
        <DialogContentText>Der Quellcode von Plantala/Julala läuft unter einer MIT Lizenz.</DialogContentText>
        <DialogContentText>
          Du hast eine Idee für eine weitere Nachnutzung? Du wünscht dir auch eine App, die dir Mandalas mit deinen
          Motiven oder zu einem bestimmten Thema generiert? Dann kontaktiere die beiden unter folgender E-Mail-Adresse:
          <Link href="mailto:info@digitalwarenkombinat.de">info@digitalwarenkombinat.de</Link>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
