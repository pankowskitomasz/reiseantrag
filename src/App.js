import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import AnwendungHeader from "./komponenten/anwendungHeader";
import AnwendungFooter from "./komponenten/anwendungFooter";

//Allgemeine
import DatenschutzAnsicht from "./ansichten/allgemeine/datenschutzAnsicht";
import EinloggenAnsicht from "./ansichten/allgemeine/einloggenAnsicht";
import HomeAnsicht from "./ansichten/allgemeine/homeAnsicht";
import KontaktAnsicht from "./ansichten/allgemeine/kontaktAnsicht";
import NutzungsbedingungenAnsicht from "./ansichten/allgemeine/nutzungsbedingungenAnsicht";
import RegistrierenAnsicht from "./ansichten/allgemeine/registrierenAnsicht";
import WiederherstellenAnsicht from "./ansichten/allgemeine/wiederherstellenAnsicht";

//Bestellungen
import BestellungenAllgemeineAnsicht from "./ansichten/bestellungen/bestellungenAllgemeineAnsicht";
import BestellungenBestatigenAnsicht from "./ansichten/bestellungen/bestellungenBestatigenAnsicht";
import BestellungenLieferungAnsicht from "./ansichten/bestellungen/bestellungenLieferungAnsicht";
import BestellungenWarenkorbAnsicht from "./ansichten/bestellungen/bestellungenWarenkorbAnsicht";
import BestellungenZahlungAnsicht from "./ansichten/bestellungen/bestellungenZahlungAnsicht";

//Kunde
import KundeDashboardAnsicht from "./ansichten/kunde/kundeDashboardAnsicht";
import KundeMeineBestellungenAnsicht from "./ansichten/kunde/kundeMeineBestellungenAnsicht";
import KundeMeineDatenAnsicht from "./ansichten/kunde/kundeMeineDatenAnsicht";
import KundeMeineZahlungenAnsicht from "./ansichten/kunde/kundeMeineZahlungenAnsicht";
import KundeProfilAnsicht from "./ansichten/kunde/kundeProfilAnsicht";

//Lagerung
import LagerungAktulisierenArtikelAnsicht from "./ansichten/lagerung/lagerungAktualisierenArtikelAnsicht";
import LagerungKategorienAnsicht from "./ansichten/lagerung/lagerungKategorienAnsicht";
import LagerungNeuArtikelAnsicht from "./ansichten/lagerung/lagerungNeuArtikelAnsicht";
import LagerungProduktenDetailsAnsicht from "./ansichten/lagerung/lagerungProduktenDetailsAnsicht";
import LagerungProduktenListeAnsicht from "./ansichten/lagerung/lagerungProduktenListeAnsicht";

//Mitarbeiter
import MitarbeiterBestellungenAnsicht from "./ansichten/mitarbeiter/mitarbeiterBestellungenAnsicht";
import MitarbeiterBestellungenDetailsAnsicht from "./ansichten/mitarbeiter/mitarbeiterBestellungenDetailsAnsicht";
import MitarbeiterDashboardAnsicht from "./ansichten/mitarbeiter/mitarbeiterDashboardAnsicht";
import MitarbeiterKundeDetailsAnsicht from "./ansichten/mitarbeiter/mitarbeiterKundeDetailsAnsicht";
import MitarbeiterKundenAnsicht from "./ansichten/mitarbeiter/mitarbeiterKundenAnsicht";

//Reisen
import ReisenAktualisierenAnsicht from "./ansichten/reisen/reisenAktualisierenAnsicht";
import ReisenDetailsAnsicht from "./ansichten/reisen/reisenDetailsAnsicht";
import ReisenListeAnsicht from "./ansichten/reisen/reisenListeAnsicht";
import ReisenNeuAnsicht from "./ansichten/reisen/reisenNeuAnsicht";
import ReisenVerwaltenAnsicht from "./ansichten/reisen/reisenVerwaltenAnsicht";

//verwaltung
import VerwaltungBenutzerAktualisierenAnsicht from "./ansichten/verwaltung/verwaltungBenutzerAktualisierenAnsicht";
import VerwaltungBenutzerDashboardAnsicht from "./ansichten/verwaltung/verwaltungBenutzerDashboardAnsicht";
import VerwaltungBenutzerGeschichteAnsicht from "./ansichten/verwaltung/verwaltungBenutzerGeschichteAnsicht";
import VerwaltungBenutzerNeuAnsicht from "./ansichten/verwaltung/verwaltungBenutzerNeuAnsicht";
import VerwaltungBenutzerVerwaltenAnsicht from "./ansichten/verwaltung/verwaltungBenutzerVerwaltenAnsicht";

import './App.css';

function App() {
  return (
    <Router>
        <AnwendungHeader/>
        <Routes>
          <Route path="/datenschutz" element={<DatenschutzAnsicht/>} />
          <Route path="/einloggen" element={<EinloggenAnsicht/>} />
          <Route exact path="/" element={<HomeAnsicht/>} />
          <Route path="/kontakt" element={<KontaktAnsicht />} />
          <Route path="/Nutzungsbedingungen" element={<NutzungsbedingungenAnsicht />} />
          <Route path="/registrieren" element={<RegistrierenAnsicht/>} />
          <Route path="/wiederherstellen" element={<WiederherstellenAnsicht/>} />
          
          <Route exact path="/bestellungen" element={<BestellungenAllgemeineAnsicht/>}/>
          <Route path="/bestellungen/bestatigen" element={<BestellungenBestatigenAnsicht/>} />
          <Route path="/bestellungen/lieferung" element={<BestellungenLieferungAnsicht/>} />
          <Route path="/bestellungen/warenkorb" element={<BestellungenWarenkorbAnsicht/>} />
          <Route path="/bestellungen/zahlung" element={<BestellungenZahlungAnsicht/>} />
          
          <Route exact path="/kunde" element={<KundeDashboardAnsicht/>}/>
          <Route path="/kunde/bestellungen" element={<KundeMeineBestellungenAnsicht/>} />
          <Route path="/kunde/daten" element={<KundeMeineDatenAnsicht/>} />
          <Route path="/kunde/zahlungen" element={<KundeMeineZahlungenAnsicht/>} />
          <Route path="/kunde/profil" element={<KundeProfilAnsicht/>} />
          
          <Route exact path="/lagerung" element={<LagerungKategorienAnsicht/>}/>
          <Route path="/lagerung/neu" element={<LagerungNeuArtikelAnsicht/>} />
          <Route path="/lagerung/produkte/:id" element={<LagerungProduktenDetailsAnsicht/>} />
          <Route path="/lagerung/liste/:id" element={<LagerungProduktenListeAnsicht/>} />
          <Route path="/lagerung/aktulisieren/:id" element={<LagerungAktulisierenArtikelAnsicht/>} />
          
          <Route exact path="/mitarbeiter" element={<MitarbeiterDashboardAnsicht/>}/>
          <Route path="/mitarbeiter/bestellungen" element={<MitarbeiterBestellungenAnsicht/>} />
          <Route path="/mitarbeiter/bestellungen/:id" element={<MitarbeiterBestellungenDetailsAnsicht/>} />
          <Route path="/mitarbeiter/kunden" element={<MitarbeiterKundenAnsicht/>} />
          <Route path="/mitarbeiter/kunden/:id" element={<MitarbeiterKundeDetailsAnsicht/>} />
          
          <Route exact path="/reisen" element={<ReisenListeAnsicht/>}/>
          <Route path="/reisen/neu" element={<ReisenNeuAnsicht/>} />
          <Route path="/reisen/:id" element={<ReisenDetailsAnsicht/>} />
          <Route path="/reisen/aktualisieren/:id" element={<ReisenAktualisierenAnsicht/>} />
          <Route path="/reisen/verwalten" element={<ReisenVerwaltenAnsicht/>} />

          <Route exact path="/benutzer" element={<VerwaltungBenutzerDashboardAnsicht/>}/>
          <Route path="/benutzer/aktualisieren/:id" element={<VerwaltungBenutzerAktualisierenAnsicht/>} />
          <Route path="/benutzer/geschichte/:id" element={<VerwaltungBenutzerGeschichteAnsicht/>} />
          <Route path="/benutzer/neu" element={<VerwaltungBenutzerNeuAnsicht/>} />
          <Route path="/benutzer/verwalten" element={<VerwaltungBenutzerVerwaltenAnsicht/>} />
        </Routes>
        <AnwendungFooter/>
    </Router>
  );
}

export default App;
