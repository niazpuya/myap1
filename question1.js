// Questions by category
const questionsByCategory =
{
    networking:
    [
      {
        question: "1. Welche Bedingungen und welche Haftungsregeln gelten bei einer offenen Handelsgesellschaft - OHG?",
        answers: [
            "Es gibt keine Haftung.",
            "Alle Gesellschafter haften unbegrenzt für alle Verbindlichkeiten.",
            "Die Haftung ist auf das Geschäftsvermögen begrenzt.",
            "Nur die Geschäftsleitung haftet."
        ],
        correct: ["Alle Gesellschafter haften unbegrenzt für alle Verbindlichkeiten."],
        explanation: "Eine OHG kann gegründet werden, wenn sich mindestens zwei Personen zum Zweck eines Handelsgewerbes zusammenschließen. Dabei haften alle Gesellschafter persönlich und unbegrenzt für alle Verbindlichkeiten der Gesellschaft."
      },
      {
          question: "2. Was versteht man unter dem Begriff Stakeholder?",
          answers: [
              "Eine interne oder externe Personengruppe mit Interesse am Verlauf eines Projekts.",
              "Nur die Geschäftsführung eines Unternehmens.",
              "Alle Mitarbeiter eines Unternehmens.",
              "Nur die Kunden eines Unternehmens."
          ],
          correct: ["Eine interne oder externe Personengruppe mit Interesse am Verlauf eines Projekts."],
          explanation: "Stakeholder sind alle internen und externen Anspruchsgruppen, die bestimmte Interessen an einem Projekt oder Prozess haben, z. B. Kunden oder Mitarbeitende."
      },
      {
          question: "3. Was sind die Hauptziele der Datensicherheit?",
          answers: [
              "Kostenreduktion, Effizienzsteigerung, Verfügbarkeit.",
              "Vertraulichkeit, Integrität, Verfügbarkeit.",
              "Wettbewerbsvorteil, Flexibilität, Zugriffsgeschwindigkeit.",
              "Datensicherung, Verschlüsselung, Backup."
          ],
          correct: ["Vertraulichkeit, Integrität, Verfügbarkeit."],
          explanation: "Datensicherheit zielt auf Vertraulichkeit, Integrität und Verfügbarkeit der Daten und Systeme ab, um sie vor unbefugtem Zugriff und Änderungen zu schützen."
      },
      {
        question: "4. Mit welchen Werkzeugen kann man ein Projekt planen und überwachen?",
        answers: [
            "Mithilfe eines Netzplans",
            "Mithilfe eines Gantt-Diagramms",
            "Mithilfe eines Projektstrukturplans"
        ],
        correct: ["Mithilfe eines Netzplans", "Mithilfe eines Gantt-Diagramms", "Mithilfe eines Projektstrukturplans"],
        explanation: "Diese Werkzeuge ermöglichen die Planung und Überwachung von Projekten, indem sie Struktur und Zeitplanung visualisieren."
      },
      {
          question: "5. Was ist ein Netzplan im Projektmanagement?",
          answers: [
              "Ein Plan zur visuellen Darstellung der Projektstruktur.",
              "Eine Methode zur grafischen Darstellung von Vorgängen und ihrer Abhängigkeiten.",
              "Ein Modell zur Verwaltung von Ressourcen.",
              "Ein Modell zur Zeitplanung."
          ],
          correct: ["Eine Methode zur grafischen Darstellung von Vorgängen und ihrer Abhängigkeiten."],
          explanation: "Der Netzplan visualisiert die zeitliche und logische Anordnung von Vorgängen in einem Projekt."
      },
      {
          question: "6. Was ist ein Gantt-Diagramm?",
          answers: [
              "Ein Diagramm, das Aufgaben und deren Dauer auf einer Zeitachse darstellt.",
              "Eine Methode zur Planung von Ressourcen.",
              "Ein Ablaufplan zur Darstellung von Prozessstrukturen.",
              "Ein Plan zur Visualisierung von Projektkosten."
          ],
          correct: ["Ein Diagramm, das Aufgaben und deren Dauer auf einer Zeitachse darstellt."],
          explanation: "Das Gantt-Diagramm zeigt den zeitlichen Ablauf aller Projektaktivitäten auf einer horizontalen Zeitachse an."
      },
      {
          question: "7. Was versteht man unter dem Top-Down-Ansatz beim Projektstrukturplan?",
          answers: [
              "Eine Methode, die vom Detail zum Ganzen geht.",
              "Eine Methode, die vom Ganzen zum Detail geht.",
              "Eine Methode, die ausschließlich für große Projekte verwendet wird.",
              "Eine Methode zur Ressourcenplanung."
          ],
          correct: ["Eine Methode, die vom Ganzen zum Detail geht."],
          explanation: "Der Top-Down-Ansatz unterteilt das Gesamtprojekt in immer kleinere Teilaufgaben, um eine klare Struktur zu schaffen."
      },
      {
          question: "8. Was versteht man unter dem 4-Phasen-Modell beim Projektmanagement?",
          answers: [
              "Ein Modell mit den Phasen Projektstart, Projektdurchführung, Projektcontrolling, Projektabschluss.",
              "Ein Modell mit den Phasen Definition, Planung, Durchführung, Abschluss.",
              "Ein Modell mit fünf Phasen.",
              "Ein Modell zur Fehleranalyse."
          ],
          correct: ["Ein Modell mit den Phasen Definition, Planung, Durchführung, Abschluss."],
          explanation: "Das 4-Phasen-Modell beschreibt die grundlegenden Phasen der Projektarbeit von der Definition bis zum Abschluss."
      },
      {
          question: "9. Was bezeichnet man als kritischen Pfad beim Netzplan?",
          answers: [
              "Der Weg, der die geringste Anzahl an Aufgaben hat.",
              "Der Weg ohne Gesamtpuffer, der die Projektdauer bestimmt.",
              "Der Weg, der die höchste Anzahl an Aufgaben hat.",
              "Der Weg mit den meisten Ressourcen."
          ],
          correct: ["Der Weg ohne Gesamtpuffer, der die Projektdauer bestimmt."],
          explanation: "Der kritische Pfad hat keine Pufferzeiten und definiert die Mindestdauer des Projekts."
      },
      {
          question: "10. Was versteht man unter einer Risikoanalyse?",
          answers: [
              "Eine Analyse zur Einschätzung von Marktrisiken.",
              "Eine Analyse zur Bewertung und Prävention von Projekt- und Systemrisiken.",
              "Ein Modell zur Projektkostenanalyse.",
              "Eine Strategie zur Steigerung der Effizienz."
          ],
          correct: ["Eine Analyse zur Bewertung und Prävention von Projekt- und Systemrisiken."],
          explanation: "Die Risikoanalyse ermittelt, bewertet und klassifiziert potenzielle Risiken und definiert Maßnahmen zu deren Vermeidung."
      },
      {
          question: "11. Was versteht man unter dem Begriff Stakeholder?",
          answers: [
              "Eine Person oder Gruppe, die ein Projekt direkt finanziert.",
              "Eine Anspruchsgruppe mit Interesse am Projektverlauf und -ergebnis.",
              "Alle Mitarbeiter in einem Projekt.",
              "Nur die externen Berater eines Projekts."
          ],
          correct: ["Eine Anspruchsgruppe mit Interesse am Projektverlauf und -ergebnis."],
          explanation: "Stakeholder sind Personen oder Gruppen, die direkt oder indirekt Einfluss auf das Projekt haben und daran interessiert sind."
      },
      {
          question: "12. Was sind die Hauptziele der Datensicherheit?",
          answers: [
              "Datenspeicherung und schnelle Verarbeitung",
              "Vertraulichkeit, Integrität, Verfügbarkeit",
              "Datenschutz und Kosteneffizienz",
              "Redundanz und Skalierbarkeit"
          ],
          correct: ["Vertraulichkeit, Integrität, Verfügbarkeit"],
          explanation: "Die Datensicherheit gewährleistet Vertraulichkeit, Integrität und Verfügbarkeit aller kritischen Daten und Systeme."
      },
      {
          question: "13. Wie errechnet sich der Gewinn eines Unternehmens?",
          answers: [
              "Einnahmen multipliziert mit Kosten",
              "Umsatz abzüglich variabler Kosten",
              "Einnahmen minus Kosten",
              "Umsatz abzüglich Personalkosten"
          ],
          correct: ["Einnahmen minus Kosten"],
          explanation: "Der Gewinn eines Unternehmens ergibt sich durch den Abzug der Gesamtkosten vom Umsatz."
      },
      {
          question: "14. Was ist eine DMZ im Netzwerkbereich?",
          answers: [
              "Ein Bereich für Mitarbeiterzugang.",
              "Ein isoliertes Subnetz zwischen internem und externem Netzwerk.",
              "Ein Segment zur Datensicherung.",
              "Ein privates Netzwerksegment."
          ],
          correct: ["Ein isoliertes Subnetz zwischen internem und externem Netzwerk."],
          explanation: "Eine DMZ trennt das interne vom externen Netzwerk und schützt durch definierte Regeln Server vor Angriffen."
      },
      {
          question: "15. Welche Aufgabe hat ein Netzwerk-Router?",
          answers: [
              "Er leitet Datenpakete innerhalb eines Netzwerks weiter.",
              "Er verteilt Strom im Netzwerk.",
              "Er speichert Datenpakete zwischen.",
              "Er verwaltet nur drahtlose Netzwerke."
          ],
          correct: ["Er leitet Datenpakete innerhalb eines Netzwerks weiter."],
          explanation: "Ein Router verbindet Netzwerke auf Schicht 3 des OSI-Modells und leitet Datenpakete zwischen diesen weiter."
      },
      {
        question: "16. Mit welchen Werkzeugen kann man ein Projekt planen und überwachen?",
        answers: [
            "Mithilfe eines Netzplans",
            "Mithilfe eines Gantt-Diagramms",
            "Mithilfe eines Projektstrukturplans"
        ],
        correct: ["Mithilfe eines Netzplans", "Mithilfe eines Gantt-Diagramms", "Mithilfe eines Projektstrukturplans"],
        explanation: "Diese Werkzeuge ermöglichen die Planung und Überwachung von Projekten, indem sie Struktur und Zeitplanung visualisieren."
      },
      {
          question: "17. Was ist ein Netzplan im Projektmanagement?",
          answers: [
              "Ein Plan zur visuellen Darstellung der Projektstruktur.",
              "Eine Methode zur grafischen Darstellung von Vorgängen und ihrer Abhängigkeiten.",
              "Ein Modell zur Verwaltung von Ressourcen.",
              "Ein Modell zur Zeitplanung."
          ],
          correct: ["Eine Methode zur grafischen Darstellung von Vorgängen und ihrer Abhängigkeiten."],
          explanation: "Der Netzplan visualisiert die zeitliche und logische Anordnung von Vorgängen in einem Projekt."
      },
      {
          question: "18. Was ist ein Gantt-Diagramm?",
          answers: [
              "Ein Diagramm, das Aufgaben und deren Dauer auf einer Zeitachse darstellt.",
              "Eine Methode zur Planung von Ressourcen.",
              "Ein Ablaufplan zur Darstellung von Prozessstrukturen.",
              "Ein Plan zur Visualisierung von Projektkosten."
          ],
          correct: ["Ein Diagramm, das Aufgaben und deren Dauer auf einer Zeitachse darstellt."],
          explanation: "Das Gantt-Diagramm zeigt den zeitlichen Ablauf aller Projektaktivitäten auf einer horizontalen Zeitachse an."
      },
      {
          question: "19. Was versteht man unter dem Top-Down-Ansatz beim Projektstrukturplan?",
          answers: [
              "Eine Methode, die vom Detail zum Ganzen geht.",
              "Eine Methode, die vom Ganzen zum Detail geht.",
              "Eine Methode, die ausschließlich für große Projekte verwendet wird.",
              "Eine Methode zur Ressourcenplanung."
          ],
          correct: ["Eine Methode, die vom Ganzen zum Detail geht."],
          explanation: "Der Top-Down-Ansatz unterteilt das Gesamtprojekt in immer kleinere Teilaufgaben, um eine klare Struktur zu schaffen."
      },
      {
          question: "20. Was versteht man unter dem Bottom-Up-Ansatz beim Projektstrukturplan?",
          answers: [
              "Eine Methode, die vom Detail zum Ganzen geht.",
              "Eine Methode, die vom Ganzen zum Detail geht.",
              "Ein Ansatz, der besonders in großen Projekten eingesetzt wird.",
              "Ein Verfahren zur Budgetierung."
          ],
          correct: ["Eine Methode, die vom Detail zum Ganzen geht."],
          explanation: "Beim Bottom-Up-Ansatz werden einzelne kleine Probleme gelöst, die dann zum Gesamtprojekt führen."
      },
      {
          question: "21. Was versteht man unter dem 4-Phasen-Modell beim Projektmanagement?",
          answers: [
              "Ein Modell mit den Phasen Projektstart, Projektdurchführung, Projektcontrolling, Projektabschluss.",
              "Ein Modell mit den Phasen Definition, Planung, Durchführung, Abschluss.",
              "Ein Modell mit fünf Phasen.",
              "Ein Modell zur Fehleranalyse."
          ],
          correct: ["Ein Modell mit den Phasen Definition, Planung, Durchführung, Abschluss."],
          explanation: "Das 4-Phasen-Modell beschreibt die grundlegenden Phasen der Projektarbeit von der Definition bis zum Abschluss."
      },
      {
          question: "22. Was bezeichnet man als kritischen Pfad beim Netzplan?",
          answers: [
              "Der Weg, der die geringste Anzahl an Aufgaben hat.",
              "Der Weg ohne Gesamtpuffer, der die Projektdauer bestimmt.",
              "Der Weg, der die höchste Anzahl an Aufgaben hat.",
              "Der Weg mit den meisten Ressourcen."
          ],
          correct: ["Der Weg ohne Gesamtpuffer, der die Projektdauer bestimmt."],
          explanation: "Der kritische Pfad hat keine Pufferzeiten und definiert die Mindestdauer des Projekts."
      },
      {
          question: "23. Was versteht man unter einer Risikoanalyse?",
          answers: [
              "Eine Analyse zur Einschätzung von Marktrisiken.",
              "Eine Analyse zur Bewertung und Prävention von Projekt- und Systemrisiken.",
              "Ein Modell zur Projektkostenanalyse.",
              "Eine Strategie zur Steigerung der Effizienz."
          ],
          correct: ["Eine Analyse zur Bewertung und Prävention von Projekt- und Systemrisiken."],
          explanation: "Die Risikoanalyse ermittelt, bewertet und klassifiziert potenzielle Risiken und definiert Maßnahmen zu deren Vermeidung."
      },
      {
          question: "24. Was versteht man unter dem Begriff Stakeholder?",
          answers: [
              "Eine Person oder Gruppe, die ein Projekt direkt finanziert.",
              "Eine Anspruchsgruppe mit Interesse am Projektverlauf und -ergebnis.",
              "Alle Mitarbeiter in einem Projekt.",
              "Nur die externen Berater eines Projekts."
          ],
          correct: ["Eine Anspruchsgruppe mit Interesse am Projektverlauf und -ergebnis."],
          explanation: "Stakeholder sind Personen oder Gruppen, die direkt oder indirekt Einfluss auf das Projekt haben und daran interessiert sind."
      },
      {
          question: "25. Was sind die Hauptziele der Datensicherheit?",
          answers: [
              "Datenspeicherung und schnelle Verarbeitung",
              "Vertraulichkeit, Integrität, Verfügbarkeit",
              "Datenschutz und Kosteneffizienz",
              "Redundanz und Skalierbarkeit"
          ],
          correct: ["Vertraulichkeit, Integrität, Verfügbarkeit"],
          explanation: "Die Datensicherheit gewährleistet Vertraulichkeit, Integrität und Verfügbarkeit aller kritischen Daten und Systeme."
      },
      {
          question: "26. Wie errechnet sich der Gewinn eines Unternehmens?",
          answers: [
              "Einnahmen multipliziert mit Kosten",
              "Umsatz abzüglich variabler Kosten",
              "Einnahmen minus Kosten",
              "Umsatz abzüglich Personalkosten"
          ],
          correct: ["Einnahmen minus Kosten"],
          explanation: "Der Gewinn eines Unternehmens ergibt sich durch den Abzug der Gesamtkosten vom Umsatz."
      },
      {
          question: "27. Was ist eine DMZ im Netzwerkbereich?",
          answers: [
              "Ein Bereich für Mitarbeiterzugang.",
              "Ein isoliertes Subnetz zwischen internem und externem Netzwerk.",
              "Ein Segment zur Datensicherung.",
              "Ein privates Netzwerksegment."
          ],
          correct: ["Ein isoliertes Subnetz zwischen internem und externem Netzwerk."],
          explanation: "Eine DMZ trennt das interne vom externen Netzwerk und schützt durch definierte Regeln Server vor Angriffen."
      },
      {
          question: "28. Welche Aufgabe hat ein Netzwerk-Router?",
          answers: [
              "Er leitet Datenpakete innerhalb eines Netzwerks weiter.",
              "Er verteilt Strom im Netzwerk.",
              "Er speichert Datenpakete zwischen.",
              "Er verwaltet nur drahtlose Netzwerke."
          ],
          correct: ["Er leitet Datenpakete innerhalb eines Netzwerks weiter."],
          explanation: "Ein Router verbindet Netzwerke auf Schicht 3 des OSI-Modells und leitet Datenpakete zwischen diesen weiter."
      },
      {
        question: "29. Welche Bedingungen und welche Haftungsregeln gelten bei einer offenen Handelsgesellschaft - OHG?",
        answers: [
            "Es gibt keine Haftung.",
            "Alle Gesellschafter haften unbegrenzt für alle Verbindlichkeiten.",
            "Die Haftung ist auf das Geschäftsvermögen begrenzt.",
            "Nur die Geschäftsleitung haftet."
        ],
        correct: ["Alle Gesellschafter haften unbegrenzt für alle Verbindlichkeiten."],
        explanation: "Eine OHG kann gegründet werden, wenn sich mindestens zwei Personen zusammenschließen. Alle Gesellschafter haften persönlich und unbegrenzt für Verbindlichkeiten."
      },
      {
          question: "30. Was versteht man unter dem Begriff Stakeholder?",
          answers: [
              "Eine interne oder externe Personengruppe mit Interesse am Verlauf eines Projekts.",
              "Nur die Geschäftsführung eines Unternehmens.",
              "Alle Mitarbeiter eines Unternehmens.",
              "Nur die Kunden eines Unternehmens."
          ],
          correct: ["Eine interne oder externe Personengruppe mit Interesse am Verlauf eines Projekts."],
          explanation: "Stakeholder sind alle internen und externen Anspruchsgruppen, die bestimmte Interessen am Projektverlauf haben."
      },
      {
          question: "31. Was sind die Hauptziele der Datensicherheit?",
          answers: [
              "Kostenreduktion, Effizienzsteigerung, Verfügbarkeit.",
              "Vertraulichkeit, Integrität, Verfügbarkeit.",
              "Wettbewerbsvorteil, Flexibilität, Zugriffsgeschwindigkeit.",
              "Datensicherung, Verschlüsselung, Backup."
          ],
          correct: ["Vertraulichkeit, Integrität, Verfügbarkeit."],
          explanation: "Datensicherheit zielt darauf ab, Daten und Systeme vertraulich, intakt und verfügbar zu halten."
      },
      {
          question: "32. Wie errechnet sich der Gewinn eines Unternehmens?",
          answers: [
              "Einnahmen multipliziert mit Kosten",
              "Umsatz abzüglich variabler Kosten",
              "Einnahmen minus Kosten",
              "Umsatz abzüglich Personalkosten"
          ],
          correct: ["Einnahmen minus Kosten"],
          explanation: "Der Gewinn eines Unternehmens berechnet sich durch die Einnahmen minus aller Kosten."
      },
      {
          question: "33. Was versteht man unter einer Risikoanalyse?",
          answers: [
              "Eine Analyse zur Einschätzung von Marktrisiken.",
              "Eine Analyse zur Bewertung und Prävention von Projekt- und Systemrisiken.",
              "Ein Modell zur Projektkostenanalyse.",
              "Eine Strategie zur Steigerung der Effizienz."
          ],
          correct: ["Eine Analyse zur Bewertung und Prävention von Projekt- und Systemrisiken."],
          explanation: "Die Risikoanalyse bewertet potenzielle Risiken und definiert Maßnahmen zu deren Vermeidung."
      },
      {
          question: "34. Was ist eine DMZ im Netzwerkbereich?",
          answers: [
              "Ein Bereich für Mitarbeiterzugang.",
              "Ein isoliertes Subnetz zwischen internem und externem Netzwerk.",
              "Ein Segment zur Datensicherung.",
              "Ein privates Netzwerksegment."
          ],
          correct: ["Ein isoliertes Subnetz zwischen internem und externem Netzwerk."],
          explanation: "Eine DMZ trennt das interne Netzwerk vom externen, um Sicherheit zu gewährleisten."
      },
      {
          question: "35. Welche Kriterien müssen für die Marktform des Polypols erfüllt sein?",
          answers: [
              "Wenige Anbieter und viele Nachfrager.",
              "Ein Anbieter und viele Nachfrager.",
              "Viele Anbieter und viele Nachfrager.",
              "Wenige Anbieter und wenige Nachfrager."
          ],
          correct: ["Viele Anbieter und viele Nachfrager."],
          explanation: "Im Polypol gibt es zahlreiche Anbieter und Nachfrager, was Wettbewerb fördert."
      },
      {
          question: "36. Was versteht man unter dem Bottom-Up-Ansatz beim Projektstrukturplan?",
          answers: [
              "Eine Methode, die vom Detail zum Ganzen geht.",
              "Eine Methode, die vom Ganzen zum Detail geht.",
              "Ein Ansatz, der besonders in großen Projekten eingesetzt wird.",
              "Ein Verfahren zur Budgetierung."
          ],
          correct: ["Eine Methode, die vom Detail zum Ganzen geht."],
          explanation: "Im Bottom-Up-Ansatz wird das Projekt in Einzelschritte zerlegt und dann zum Gesamtprojekt zusammengesetzt."
      },
      {
          question: "37. Welche IT-Komponenten sind Ein- oder Ausgabegeräte?",
          answers: [
              "a) Drucker",
              "b) Scanner",
              "c) Maus",
              "d) Display",
              "e) Touchpad"
          ],
          correct: ["Scanner und Maus (Eingabe), Drucker und Display (Ausgabe)"],
          explanation: "Scanner und Maus sind Eingabegeräte, während Drucker und Display zur Ausgabe gehören."
      },
      {
          question: "38. Nenne die verschiedenen Cloud-Formen, die durch Cloud Computing angeboten werden.",
          answers: [
              "Private Cloud",
              "Public Cloud",
              "Hybrid Cloud",
              "Community Cloud"
          ],
          correct: ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Community Cloud"],
          explanation: "Es gibt verschiedene Cloud-Typen, die je nach Anwendungsfall eingesetzt werden."
      },
      {
          question: "39. Was versteht man unter dem Begriff Cross-Selling?",
          answers: [
              "Das Angebot verwandter Produkte zusätzlich zu einem bereits ausgewählten Produkt.",
              "Die Preissenkung eines Produktes, um es attraktiver zu machen.",
              "Der Austausch eines Produktes gegen ein neues Modell.",
              "Das Ausblenden eines Produkts im Verkaufsbereich."
          ],
          correct: ["Das Angebot verwandter Produkte zusätzlich zu einem bereits ausgewählten Produkt."],
          explanation: "Cross-Selling erhöht den Umsatz und die Kundenbindung durch ergänzende Produktangebote."
      },
      {
          question: "40. Was versteht man unter der Marktform des Monopols?",
          answers: [
              "Es gibt viele Anbieter und viele Nachfrager.",
              "Ein Anbieter steht vielen Nachfragern gegenüber.",
              "Es gibt nur einen Nachfrager und viele Anbieter.",
              "Es gibt wenige Anbieter und viele Nachfrager."
          ],
          correct: ["Ein Anbieter steht vielen Nachfragern gegenüber."],
          explanation: "In einem Monopol kann ein Anbieter den Markt stark beeinflussen, da er keine direkte Konkurrenz hat."
      },
      {
        question: "41. Was versteht man unter dem Begriff IT-Benchmarking?",
        answers: [
            "Ein Vergleich der IT-Dienstleistungen eines Unternehmens mit anderen Unternehmen.",
            "Ein System zur Überwachung der Netzwerkgeschwindigkeit.",
            "Ein Verfahren zur Kostenanalyse von IT-Systemen.",
            "Ein Prozess zur Analyse von IT-Ressourcen innerhalb eines Unternehmens."
        ],
        correct: ["Ein Vergleich der IT-Dienstleistungen eines Unternehmens mit anderen Unternehmen."],
        explanation: "IT-Benchmarking vergleicht Leistung, Kosten und Qualität von IT-Services, um Optimierungspotential zu identifizieren."
      },
      {
          question: "42. Welche Aufgaben und Ziele verfolgen die betrieblichen Grundfunktionen?",
          answers: [
              "Die Erhöhung des Betriebsgewinns.",
              "Optimale Gestaltung von Beschaffung, Produktion, Absatz und Finanzierung.",
              "Alle Ressourcen effizient zu nutzen.",
              "Den Kundenservice zu verbessern."
          ],
          correct: ["Optimale Gestaltung von Beschaffung, Produktion, Absatz und Finanzierung."],
          explanation: "Diese Grundfunktionen sind essenziell für die betriebliche Wertschöpfung und Zielerreichung."
      },
      {
          question: "43. Was ist eine Dockingstation für Notebooks?",
          answers: [
              "Eine Erweiterung für die Speicherkapazität.",
              "Eine Verbindungseinheit für zusätzliche Anschlüsse.",
              "Ein Gerät zur Datensicherung.",
              "Ein Ladegerät."
          ],
          correct: ["Eine Verbindungseinheit für zusätzliche Anschlüsse."],
          explanation: "Eine Dockingstation erweitert die Anschlussmöglichkeiten eines Notebooks für Peripheriegeräte und Netzwerk."
      },
      {
          question: "44. Was sind die Vorteile eines User-Helpdesk-Ticketsystems?",
          answers: [
              "Zentrale Erfassung von Support-Anfragen und effizientere Problemlösung.",
              "Kosteneinsparungen durch Selbstbedienung.",
              "Höhere Kundenzufriedenheit durch Schnelligkeit.",
              "Geringere Mitarbeiteranzahl im Support erforderlich."
          ],
          correct: ["Zentrale Erfassung von Support-Anfragen und effizientere Problemlösung."],
          explanation: "Helpdesk-Ticketsysteme ermöglichen eine strukturierte Bearbeitung und Nachverfolgung von Kundenanfragen."
      },
      {
          question: "45. Nenne die englischen Bezeichnungen der einzelnen Schichten im OSI-Referenzmodell.",
          answers: [
              "Application, Presentation, Session, Transport, Network, Data Link, Physical",
              "Physical, Network, Application, Data Link, Transport, Session, Presentation",
              "Session, Application, Network, Presentation, Transport, Data Link, Physical",
              "Transport, Network, Data Link, Physical, Application, Session, Presentation"
          ],
          correct: ["Application, Presentation, Session, Transport, Network, Data Link, Physical"],
          explanation: "Diese Schichten des OSI-Modells ermöglichen die Interoperabilität von Netzwerkprotokollen und -geräten."
      },
      {
          question: "46. Was versteht man unter einer Meilenstein-Planung?",
          answers: [
              "Eine Form der detaillierten Terminplanung.",
              "Eine Planung zur Definition und Visualisierung wichtiger Projektziele.",
              "Ein Verfahren zur Steuerung der Projektkosten.",
              "Ein Planungsinstrument für die Ressourcenverteilung."
          ],
          correct: ["Eine Planung zur Definition und Visualisierung wichtiger Projektziele."],
          explanation: "Meilensteine markieren bedeutende Fortschritte und Ziele, die für den Projekterfolg notwendig sind."
      },
      {
          question: "47. Welche Vorteile bietet der Einsatz von Virtual Private Clouds?",
          answers: [
              "Maximale Sicherheit durch ein privates Netzwerk innerhalb einer öffentlichen Cloud.",
              "Keine Notwendigkeit zur Datenverschlüsselung.",
              "Geringere Flexibilität im Vergleich zur Public Cloud.",
              "Höhere Netzwerkkosten durch abgeschottete Infrastruktur."
          ],
          correct: ["Maximale Sicherheit durch ein privates Netzwerk innerhalb einer öffentlichen Cloud."],
          explanation: "Virtual Private Clouds bieten Sicherheits- und Datenschutzvorteile innerhalb eines öffentlich zugänglichen Netzwerks."
      },
      {
          question: "48. Was ist Green-IT?",
          answers: [
              "Ein Ansatz zur Reduzierung von IT-Kosten.",
              "Strategien zur umweltfreundlichen Gestaltung und Nutzung von IT über ihren gesamten Lebenszyklus hinweg.",
              "Eine Methode zur Verbesserung der IT-Sicherheit.",
              "Ein Verfahren zur Optimierung der Speicherleistung."
          ],
          correct: ["Strategien zur umweltfreundlichen Gestaltung und Nutzung von IT über ihren gesamten Lebenszyklus hinweg."],
          explanation: "Green-IT umfasst die Minimierung des Energieverbrauchs und die Reduzierung des Ressourcenverbrauchs in der IT."
      },
      {
          question: "49. Nenne die Vorteile des Servicemodells PaaS (Platform as a Service).",
          answers: [
              "Erhöhte Flexibilität für Entwickler, schnellere Bereitstellung und Kosteneinsparungen.",
              "Kostspielige Hardwareanforderungen.",
              "Begrenzte Anwendungsbereiche.",
              "Erhöhter Speicherbedarf im Unternehmen."
          ],
          correct: ["Erhöhte Flexibilität für Entwickler, schnellere Bereitstellung und Kosteneinsparungen."],
          explanation: "PaaS bietet Entwicklern vorgefertigte Tools und Umgebungen, um Anwendungen effizient zu entwickeln."
      },
      {
          question: "50. Was ist eine Nutzwertanalyse?",
          answers: [
              "Ein Verfahren zur Analyse von Produktionskosten.",
              "Ein Punktbewertungsverfahren zur Entscheidungsfindung bei komplexen Alternativen.",
              "Ein Instrument zur Bestimmung des optimalen Lagerbestands.",
              "Ein System zur Bewertung der IT-Performance."
          ],
          correct: ["Ein Punktbewertungsverfahren zur Entscheidungsfindung bei komplexen Alternativen."],
          explanation: "Die Nutzwertanalyse hilft bei der Bewertung und Auswahl von Alternativen anhand definierter Kriterien."
      },
      {
          question: "51. Was ist der Unterschied zwischen einem Hypervisor Typ 1 und Typ 2?",
          answers: [
              "Typ 1 läuft direkt auf der Hardware, Typ 2 benötigt ein Betriebssystem.",
              "Typ 2 läuft direkt auf der Hardware, Typ 1 benötigt ein Betriebssystem.",
              "Beide Hypervisor-Typen erfordern kein Betriebssystem.",
              "Beide Hypervisor-Typen laufen ausschließlich auf der Hardware."
          ],
          correct: ["Typ 1 läuft direkt auf der Hardware, Typ 2 benötigt ein Betriebssystem."],
          explanation: "Hypervisor Typ 1 läuft nativ auf der Hardware und Typ 2 auf einem vorhandenen Betriebssystem."
      },
      {
          question: "52. Welche Aufgabe übernimmt eine USV (unterbrechungsfreie Stromversorgung)?",
          answers: [
              "Regelung der Temperatur in Serverräumen.",
              "Überbrückung von Stromausfällen zur Sicherstellung des Betriebs kritischer Systeme.",
              "Verteilung des Stroms in einem Netzwerk.",
              "Optimierung der Netzwerkverbindungen."
          ],
          correct: ["Überbrückung von Stromausfällen zur Sicherstellung des Betriebs kritischer Systeme."],
          explanation: "Eine USV schützt vor Stromausfällen und anderen Stromstörungen, um die Verfügbarkeit der IT-Infrastruktur zu gewährleisten."
      },
      {
        question: "53. Was ist der Zweck von Kundenbefragungen im Rahmen von Marketingmaßnahmen?",
        answers: [
            "Steigerung der Produktivität.",
            "Verbesserung des Arbeitsklimas.",
            "Optimierung der Kundenbindung und Erfassung der Kundenzufriedenheit.",
            "Reduzierung der Materialkosten."
        ],
        correct: ["Optimierung der Kundenbindung und Erfassung der Kundenzufriedenheit."],
        explanation: "Kundenbefragungen dienen dazu, Trends, Kundenzufriedenheit und die Marktposition eines Unternehmens zu analysieren."
      },
      {
          question: "54. Unterscheide zwischen offenen und geschlossenen Fragen im Kundenservice.",
          answers: [
              "Offene Fragen ermöglichen detaillierte Antworten, geschlossene Fragen sind Ja- oder Nein-Fragen.",
              "Offene Fragen sind Ja- oder Nein-Fragen, geschlossene Fragen erfordern detaillierte Antworten.",
              "Beide Typen bieten dieselben Antwortmöglichkeiten.",
              "Geschlossene Fragen erlauben unbegrenzte Antwortmöglichkeiten."
          ],
          correct: ["Offene Fragen ermöglichen detaillierte Antworten, geschlossene Fragen sind Ja- oder Nein-Fragen."],
          explanation: "Offene Fragen beginnen oft mit W-Wörtern und erlauben detaillierte Antworten, während geschlossene Fragen kurz beantwortet werden."
      },
      {
          question: "55. Was ist der kritische Pfad in einem Projekt?",
          answers: [
              "Der Weg mit den meisten Ressourcen.",
              "Der Pfad ohne Pufferzeiten, der die Projektdauer bestimmt.",
              "Der kürzeste Weg durch das Projekt.",
              "Der Weg, der die höchsten Kosten verursacht."
          ],
          correct: ["Der Pfad ohne Pufferzeiten, der die Projektdauer bestimmt."],
          explanation: "Der kritische Pfad legt die minimale Projektdauer fest und hat keine Flexibilität in der Zeitplanung."
      },
      {
          question: "56. Welche Aufgaben hat eine unterbrechungsfreie Stromversorgung (USV)?",
          answers: [
              "Reguliert die Raumtemperatur.",
              "Ermöglicht Notstromversorgung und schützt vor Stromausfällen.",
              "Verteilt Strom innerhalb eines Netzwerks.",
              "Reduziert Netzwerklatenzen."
          ],
          correct: ["Ermöglicht Notstromversorgung und schützt vor Stromausfällen."],
          explanation: "Eine USV schützt wichtige IT-Systeme vor Stromausfällen und anderen Stromstörungen, um deren Verfügbarkeit sicherzustellen."
      },
      {
          question: "57. Was versteht man unter der Marktform des Angebotsoligopols?",
          answers: [
              "Ein Markt mit vielen Anbietern und wenigen Nachfragern.",
              "Ein Markt mit wenigen Anbietern und vielen Nachfragern.",
              "Ein Markt mit nur einem Anbieter.",
              "Ein Markt ohne Nachfrage."
          ],
          correct: ["Ein Markt mit wenigen Anbietern und vielen Nachfragern."],
          explanation: "Ein Angebotsoligopol ist durch wenige Anbieter und viele Nachfrager gekennzeichnet, z. B. der Energiemarkt."
      },
      {
          question: "58. Welche Vorteile bietet das Servicemodell SaaS (Software as a Service)?",
          answers: [
              "Erfordert lokale Installation und Speicherung.",
              "Bereitstellung über das Internet, hohe Skalierbarkeit und weniger Wartungsaufwand.",
              "Langsame Zugriffsgeschwindigkeiten und hohe Hardwareanforderungen.",
              "Nur geeignet für kleine Unternehmen."
          ],
          correct: ["Bereitstellung über das Internet, hohe Skalierbarkeit und weniger Wartungsaufwand."],
          explanation: "SaaS ermöglicht flexiblen Zugriff auf Software über das Internet ohne lokale Installation."
      },
      {
        question: "59. Wie berechnet sich der Deckungsbeitrag in einem Unternehmen?",
        answers: [
            "Einnahmen minus Fixkosten.",
            "Differenz zwischen erzielten Erlösen und variablen Kosten.",
            "Verkaufspreis multipliziert mit der Anzahl verkaufter Einheiten.",
            "Gesamteinnahmen minus Gesamtaufwendungen."
        ],
        correct: ["Differenz zwischen erzielten Erlösen und variablen Kosten."],
        explanation: "Der Deckungsbeitrag zeigt, welcher Teil der Einnahmen zur Deckung der Fixkosten beitragen kann."
      },
      {
        question: "60. Was bedeutet der Begriff Green-IT?",
        answers: [
            "Ein Ansatz zur Reduzierung der IT-Kosten.",
            "Strategien zur umweltfreundlichen Gestaltung und Nutzung von IT über den gesamten Lebenszyklus.",
            "Ein Verfahren zur Verbesserung der IT-Sicherheit.",
            "Eine Methode zur Optimierung der Speicherleistung."
        ],
        correct: ["Strategien zur umweltfreundlichen Gestaltung und Nutzung von IT über den gesamten Lebenszyklus."],
        explanation: "Green-IT zielt auf Ressourcenschonung und die Minimierung des Energieverbrauchs in der IT ab."
      },
      {
        question: "61. Erklären Sie den Begriff CMS im Bereich IT.",
        answers: [
            "Customer Management System für die Kundenverwaltung.",
            "Content Management System zur Verwaltung und Bearbeitung von Inhalten.",
            "Cloud Management System für Server.",
            "Client Management System für Benutzerprofile."
        ],
        correct: ["Content Management System zur Verwaltung und Bearbeitung von Inhalten."],
        explanation: "Ein CMS ermöglicht die Erstellung und Verwaltung digitaler Inhalte, z. B. für Websites."
      },
      {
        question: "62. Welche Aufgaben und Ziele verfolgen die betrieblichen Grundfunktionen?",
        answers: [
            "Beschaffung und Produktion.",
            "Absatz/Vertrieb und Finanzierung.",
            "Verkauf und Marketing.",
            "Produktion und Verwaltung."
        ],
        correct: ["Beschaffung und Produktion.", "Absatz/Vertrieb und Finanzierung."],
        explanation: "Zu den Grundfunktionen zählen die Versorgung mit Rohstoffen, Produktion, Verkauf und finanzielle Steuerung."
      },
      {
          question: "63. Welche Merkmale besitzt eine Europäische Gesellschaft (SE)?",
          answers: [
              "Eigene Rechtspersönlichkeit, Kapitalgesellschaft, Mindestkapital von 120.000 Euro.",
              "Personengesellschaft mit unbegrenzter Haftung.",
              "Für gemeinnützige Zwecke konzipiert.",
              "Keine spezifischen Anforderungen an das Startkapital."
          ],
          correct: ["Eigene Rechtspersönlichkeit, Kapitalgesellschaft, Mindestkapital von 120.000 Euro."],
          explanation: "Eine Europäische Gesellschaft hat bestimmte Anforderungen an Kapital und Haftung, ähnlich einer AG."
      },
      {
          question: "64. Welche Unternehmensformen sind in Deutschland Personengesellschaften?",
          answers: [
              "Gesellschaft bürgerlichen Rechts (GbR), Offene Handelsgesellschaft (OHG), Kommanditgesellschaft (KG).",
              "Aktiengesellschaft (AG), GmbH, SE.",
              "Nur Einzelunternehmen.",
              "Staatliche Gesellschaften und kommunale Betriebe."
          ],
          correct: ["Gesellschaft bürgerlichen Rechts (GbR), Offene Handelsgesellschaft (OHG), Kommanditgesellschaft (KG)."],
          explanation: "Diese Unternehmensformen setzen mindestens zwei Partner voraus und haften gemeinschaftlich."
      },
      {
          question: "65. Was versteht man unter einer Machbarkeitsanalyse?",
          answers: [
              "Eine Analyse zur Einschätzung der Realisierbarkeit eines Projekts.",
              "Ein Test zur Marktanalyse.",
              "Eine Methode zur Erstellung von Produkten.",
              "Ein Verfahren zur Optimierung von IT-Projekten."
          ],
          correct: ["Eine Analyse zur Einschätzung der Realisierbarkeit eines Projekts."],
          explanation: "Die Machbarkeitsanalyse bewertet technische, finanzielle und rechtliche Umsetzbarkeit."
      },
      {
          question: "66. Was bedeutet der Begriff Green-IT?",
          answers: [
              "Strategien zur umweltfreundlichen Gestaltung und Nutzung von IT über den gesamten Lebenszyklus.",
              "Ein Ansatz zur Reduzierung der IT-Kosten.",
              "Ein Verfahren zur Verbesserung der IT-Sicherheit.",
              "Eine Methode zur Optimierung der Speicherleistung."
          ],
          correct: ["Strategien zur umweltfreundlichen Gestaltung und Nutzung von IT über den gesamten Lebenszyklus."],
          explanation: "Green-IT zielt auf Ressourcenschonung und die Minimierung des Energieverbrauchs in der IT ab."
      },
      {
          question: "67. Welche Vorteile bietet das Servicemodell SaaS (Software as a Service)?",
          answers: [
              "Erfordert lokale Installation und Speicherung.",
              "Bereitstellung über das Internet, hohe Skalierbarkeit und weniger Wartungsaufwand.",
              "Langsame Zugriffsgeschwindigkeiten und hohe Hardwareanforderungen.",
              "Nur geeignet für kleine Unternehmen."
          ],
          correct: ["Bereitstellung über das Internet, hohe Skalierbarkeit und weniger Wartungsaufwand."],
          explanation: "SaaS ermöglicht flexiblen Zugriff auf Software über das Internet ohne lokale Installation."
      },
      {
          question: "68. Welche Aufgaben übernimmt ein Datenbankmanagementsystem (DBMS)?",
          answers: [
              "Speicherung, Veränderung und Löschung von Daten.",
              "Optimierung der Netzwerkverbindungen.",
              "Energieversorgung sicherstellen.",
              "Regulierung der Raumtemperatur."
          ],
          correct: ["Speicherung, Veränderung und Löschung von Daten."],
          explanation: "DBMS-Systeme organisieren, speichern und sichern Daten, um Mehrbenutzerzugriff zu gewährleisten."
      },
      {
        question: "69. Was versteht man unter einer Nutzwertanalyse?",
        answers: [
            "Ein Verfahren zur Optimierung der Arbeitszeit.",
            "Ein Punktbewertungsverfahren zur Entscheidungsfindung bei komplexen Alternativen.",
            "Ein System zur Bewertung der IT-Sicherheit.",
            "Eine Methode zur Kalkulation von Kosten in Projekten."
        ],
        correct: ["Ein Punktbewertungsverfahren zur Entscheidungsfindung bei komplexen Alternativen."],
        explanation: "Die Nutzwertanalyse hilft, Alternativen durch ein Punktesystem zu bewerten und die beste Entscheidung zu treffen."
      },  
      {
          question: "70. Nenne die Vorteile und Nachteile des Wasserfallmodells.",
          answers: [
              "Klare Abfolge und gute Planbarkeit, jedoch wenig flexibel bei Änderungen.",
              "Iterative Entwicklung und Flexibilität, jedoch komplexe Planung.",
              "Keine Einarbeitung notwendig, daher effizienter für neue Teammitglieder.",
              "Ideal für große Projekte, aber schwierig bei kleinen."
          ],
          correct: ["Klare Abfolge und gute Planbarkeit, jedoch wenig flexibel bei Änderungen."],
          explanation: "Das Wasserfallmodell erlaubt eine klare Struktur, ist aber bei späteren Änderungen unflexibel."
      },
      {
          question: "71. Welche Aufgaben übernimmt ein Datenbankmanagementsystem (DBMS)?",
          answers: [
              "Optimierung der Netzwerkverbindungen.",
              "Speicherung, Verwaltung und Sicherung von Daten.",
              "Überwachung der Stromversorgung.",
              "Kostensenkung für IT-Infrastruktur."
          ],
          correct: ["Speicherung, Verwaltung und Sicherung von Daten."],
          explanation: "DBMS-Systeme organisieren und sichern Daten und ermöglichen den Mehrbenutzerzugriff."
      },
      {
          question: "72. Was ist eine ABC-Analyse und wozu dient sie?",
          answers: [
              "Ein Instrument zur Produktbewertung nach verschiedenen Kriterien.",
              "Ein Verfahren zur Priorisierung von Prozessen oder Kunden nach deren Bedeutung.",
              "Eine Analyse zur Optimierung der Betriebskosten.",
              "Eine Methode zur Berechnung der Produktionszeit."
          ],
          correct: ["Ein Verfahren zur Priorisierung von Prozessen oder Kunden nach deren Bedeutung."],
          explanation: "Die ABC-Analyse klassifiziert Kunden oder Prozesse, um deren wirtschaftliche Bedeutung festzustellen."
      },
      {
          question: "73. Was ist Serverkonsolidierung und welches Ziel verfolgt sie?",
          answers: [
              "Zusammenführung von physischen Servern zur Reduktion von Kosten und Ressourcen.",
              "Erhöhung der Serveranzahl für schnelleren Datenzugriff.",
              "Einrichtung zusätzlicher Server zur Backup-Sicherung.",
              "Entwicklung eines Servers für spezifische Kundenanforderungen."
          ],
          correct: ["Zusammenführung von physischen Servern zur Reduktion von Kosten und Ressourcen."],
          explanation: "Durch Serverkonsolidierung wird die Anzahl physischer Server reduziert und Energie gespart."
      },
      {
          question: "74. Welche Arten von Anforderungen gibt es an Software?",
          answers: [
              "Geschäftsanforderungen, Benutzeranforderungen, Funktionale Anforderungen, Projektanforderungen.",
              "Technische Anforderungen, Marketinganforderungen.",
              "Nur funktionale Anforderungen.",
              "Nur Benutzeranforderungen und Projektanforderungen."
          ],
          correct: ["Geschäftsanforderungen, Benutzeranforderungen, Funktionale Anforderungen, Projektanforderungen."],
          explanation: "Softwareanforderungen umfassen geschäftliche, benutzerspezifische, funktionale und projektbezogene Aspekte."
      },
      {
          question: "75. Welche Aufgabe übernimmt eine unterbrechungsfreie Stromversorgung (USV)?",
          answers: [
              "Reguliert die Raumtemperatur.",
              "Sichert IT-Systeme bei Stromausfällen und vor Netzschwankungen.",
              "Optimiert die Netzwerkgeschwindigkeit.",
              "Verwaltet den Datenzugriff auf Server."
          ],
          correct: ["Sichert IT-Systeme bei Stromausfällen und vor Netzschwankungen."],
          explanation: "Eine USV schützt kritische IT-Systeme vor Stromausfällen und Störungen im Netz."
      },
      {
          question: "76. Was sind die Hauptziele der Datensicherheit?",
          answers: [
              "Kostenreduktion, Effizienzsteigerung, Verfügbarkeit.",
              "Vertraulichkeit, Integrität, Verfügbarkeit.",
              "Maximale Flexibilität und Geschwindigkeit.",
              "Einhaltung aller gesetzlichen Vorschriften."
          ],
          correct: ["Vertraulichkeit, Integrität, Verfügbarkeit."],
          explanation: "Datensicherheit gewährleistet den Schutz der Daten vor unbefugtem Zugriff, Änderungen und Verlust."
      },
      {
        question: "77. Was ist eine ABC-Analyse und wozu dient sie?",
        answers: [
            "Ein Instrument zur Produktbewertung nach verschiedenen Kriterien.",
            "Ein Verfahren zur Priorisierung von Prozessen oder Kunden nach deren Bedeutung.",
            "Eine Analyse zur Optimierung der Betriebskosten.",
            "Eine Methode zur Berechnung der Produktionszeit."
        ],
        correct: ["Ein Verfahren zur Priorisierung von Prozessen oder Kunden nach deren Bedeutung."],
        explanation: "Die ABC-Analyse klassifiziert Kunden oder Prozesse, um deren wirtschaftliche Bedeutung festzustellen."
      },
      {
          question: "78. Was bedeutet der Begriff Green-IT?",
          answers: [
              "Strategien zur umweltfreundlichen Gestaltung und Nutzung von IT über den gesamten Lebenszyklus.",
              "Ein Ansatz zur Reduzierung der IT-Kosten.",
              "Ein Verfahren zur Verbesserung der IT-Sicherheit.",
              "Eine Methode zur Optimierung der Speicherleistung."
          ],
          correct: ["Strategien zur umweltfreundlichen Gestaltung und Nutzung von IT über den gesamten Lebenszyklus."],
          explanation: "Green-IT zielt auf Ressourcenschonung und die Minimierung des Energieverbrauchs in der IT ab."
      },
      {
          question: "79. Welche Aufgabe übernimmt ein Datenbankmanagementsystem (DBMS)?",
          answers: [
              "Speicherung, Veränderung und Löschung von Daten.",
              "Optimierung der Netzwerkverbindungen.",
              "Energieversorgung sicherstellen.",
              "Regulierung der Raumtemperatur."
          ],
          correct: ["Speicherung, Veränderung und Löschung von Daten."],
          explanation: "DBMS-Systeme organisieren und sichern Daten und ermöglichen den Mehrbenutzerzugriff."
      },
      {
          question: "80. Welche Maßnahmen sind geeignet, um die Verarbeitungsgeschwindigkeit eines PCs zu verbessern?",
          answers: [
              "Aufrüstung des RAMs.",
              "Austausch der Festplatte gegen eine SSD.",
              "Reduktion der Software-Anwendungen.",
              "Installation zusätzlicher Lüfter."
          ],
          correct: ["Aufrüstung des RAMs.", "Austausch der Festplatte gegen eine SSD."],
          explanation: "RAM-Aufrüstung und der Wechsel zur SSD erhöhen die Performance signifikant."
      },
      {
          question: "81. Was ist der Unterschied zwischen einem Hypervisor Typ 1 und Typ 2?",
          answers: [
              "Typ 1 läuft direkt auf der Hardware, Typ 2 benötigt ein Betriebssystem.",
              "Typ 2 läuft direkt auf der Hardware, Typ 1 benötigt ein Betriebssystem.",
              "Beide Hypervisor-Typen erfordern kein Betriebssystem.",
              "Beide Hypervisor-Typen laufen ausschließlich auf der Hardware."
          ],
          correct: ["Typ 1 läuft direkt auf der Hardware, Typ 2 benötigt ein Betriebssystem."],
          explanation: "Hypervisor Typ 1 läuft nativ auf der Hardware und Typ 2 auf einem vorhandenen Betriebssystem."
      },
      {
          question: "82. Nenne die verschiedenen Cloud-Formen, die durch Cloud Computing angeboten werden.",
          answers: [
              "Public Cloud",
              "Private Cloud",
              "Hybrid Cloud",
              "Community Cloud"
          ],
          correct: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
          explanation: "Es gibt verschiedene Cloud-Typen, die je nach Anwendungsfall eingesetzt werden."
      },
      {
          question: "83. Was versteht man unter IT-Benchmarking?",
          answers: [
              "Ein Vergleich der IT-Dienstleistungen eines Unternehmens mit anderen Unternehmen.",
              "Ein System zur Überwachung der Netzwerkgeschwindigkeit.",
              "Ein Verfahren zur Kostenanalyse von IT-Systemen.",
              "Ein Prozess zur Analyse von IT-Ressourcen innerhalb eines Unternehmens."
          ],
          correct: ["Ein Vergleich der IT-Dienstleistungen eines Unternehmens mit anderen Unternehmen."],
          explanation: "IT-Benchmarking vergleicht Leistung, Kosten und Qualität von IT-Services, um Optimierungspotential zu identifizieren."
      },
      {
          question: "84. Welche Merkmale besitzt eine Europäische Gesellschaft (SE)?",
          answers: [
              "Eigene Rechtspersönlichkeit, Kapitalgesellschaft, Mindestkapital von 120.000 Euro.",
              "Personengesellschaft mit unbegrenzter Haftung.",
              "Für gemeinnützige Zwecke konzipiert.",
              "Keine spezifischen Anforderungen an das Startkapital."
          ],
          correct: ["Eigene Rechtspersönlichkeit, Kapitalgesellschaft, Mindestkapital von 120.000 Euro."],
          explanation: "Eine Europäische Gesellschaft hat bestimmte Anforderungen an Kapital und Haftung, ähnlich einer AG."
      },
      {
        question: "85. Was versteht man unter dem Begriff Cross-Selling?",
        answers: [
            "Das Angebot verwandter Produkte zusätzlich zu einem bereits ausgewählten Produkt.",
            "Die Preissenkung eines Produktes, um es attraktiver zu machen.",
            "Der Austausch eines Produktes gegen ein neues Modell.",
            "Das Ausblenden eines Produkts im Verkaufsbereich."
        ],
        correct: ["Das Angebot verwandter Produkte zusätzlich zu einem bereits ausgewählten Produkt."],
        explanation: "Cross-Selling erhöht den Umsatz und die Kundenbindung durch ergänzende Produktangebote."
      },
      {
          question: "86. Welche Marktform beschreibt das Monopol?",
          answers: [
              "Viele Anbieter und viele Nachfrager.",
              "Ein Anbieter steht vielen Nachfragern gegenüber.",
              "Viele Anbieter stehen wenigen Nachfragern gegenüber.",
              "Ein Anbieter und ein Nachfrager."
          ],
          correct: ["Ein Anbieter steht vielen Nachfragern gegenüber."],
          explanation: "Im Monopol hat ein Anbieter eine marktbeherrschende Stellung und kann Preise und Angebot stark beeinflussen."
      },
      {
          question: "87. Was bedeutet der Begriff 'Stakeholder' im Projektmanagement?",
          answers: [
              "Alle internen Anspruchsgruppen eines Unternehmens.",
              "Nur Kunden und Lieferanten.",
              "Personen und Gruppen mit Interesse oder Einfluss auf den Projektverlauf.",
              "Alle, die finanzielle Anteile im Unternehmen besitzen."
          ],
          correct: ["Personen und Gruppen mit Interesse oder Einfluss auf den Projektverlauf."],
          explanation: "Stakeholder können direkt oder indirekt Einfluss auf ein Projekt nehmen und haben bestimmte Interessen."
      },
      {
          question: "88. Welche Aufgaben hat eine USV (unterbrechungsfreie Stromversorgung) in einem Unternehmen?",
          answers: [
              "Schützt vor Stromausfällen und Überspannungen.",
              "Reduziert die Temperatur in Serverräumen.",
              "Beschleunigt die Netzwerkverbindungen.",
              "Ermöglicht schnelleren Datenzugriff."
          ],
          correct: ["Schützt vor Stromausfällen und Überspannungen."],
          explanation: "Eine USV sorgt dafür, dass IT-Systeme auch bei Stromausfällen oder Netzschwankungen weiterlaufen."
      },
      {
          question: "90. Welche Komponenten zählen zu den Ein- und Ausgabegeräten?",
          answers: [
              "a) Drucker",
              "b) Scanner",
              "c) Maus",
              "d) Display",
              "e) Touchpad"
          ],
          correct: ["Scanner, Maus und Touchpad (Eingabe); Drucker und Display (Ausgabe)"],
          explanation: "Eingabegeräte ermöglichen Nutzern die Dateneingabe, während Ausgabegeräte die Daten darstellen."
      },
      {
          question: "91. Was bedeutet der Begriff 'Käufermarkt' in der Wirtschaft?",
          answers: [
              "Ein Markt mit hoher Nachfrage und wenigen Anbietern.",
              "Eine Marktsituation, bei der die Käuferseite in der besseren Position ist.",
              "Ein Markt mit vielen Anbietern und hoher Nachfrage.",
              "Eine Marktsituation ohne Wettbewerb."
          ],
          correct: ["Eine Marktsituation, bei der die Käuferseite in der besseren Position ist."],
          explanation: "Ein Käufermarkt entsteht, wenn das Angebot die Nachfrage übersteigt, was den Käufern Preisvorteile bietet."
      },
      {
          question: "92. Was versteht man unter einer Bedarfsanalyse?",
          answers: [
              "Analyse der aktuellen Lagerbestände.",
              "Ermittlung des erforderlichen Bedarfs an Ressourcen und Materialien.",
              "Verkauf von Produkten nach Bedarf.",
              "Wettbewerbsanalyse auf dem Markt."
          ],
          correct: ["Ermittlung des erforderlichen Bedarfs an Ressourcen und Materialien."],
          explanation: "Die Bedarfsanalyse stellt sicher, dass alle notwendigen Ressourcen für das Projekt bereitgestellt werden."
      },
      {
          question: "93. Welche Vorteile bietet die Cloud-Computing-Form SaaS (Software as a Service)?",
          answers: [
              "Erfordert lokale Installation und hohe Wartung.",
              "Bereitstellung und Wartung der Software über das Internet.",
              "Software kann nur intern genutzt werden.",
              "Nur für die Speicherung von Daten geeignet."
          ],
          correct: ["Bereitstellung und Wartung der Software über das Internet."],
          explanation: "SaaS ermöglicht den Zugriff auf Software über das Internet ohne eigene Installation und Wartung."
      },



    ],
    command:
    [
        

    ],
    OSI:
    [
      

    ],
    Protocol:
    [
        
    ],
     IPADD:
    [
    
      

    ],

};
// Quiz logic and functions
let selectedCategory = '';
let currentQuestionIndex = 0;
let questions = [];
let correctAnswersCount = 0;
let incorrectAnswersCount = 0;
let masteredQuestions = [];
let needsPracticeQuestions = []; // For tracking incorrect answers
let questionsLimit = 20;

// Shuffle function to randomize questions
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start quiz and select category
document.getElementById('start-btn').addEventListener('click', () => {
    const categorySelect = document.getElementById('category-select');
    selectedCategory = categorySelect.value;

    // Select questions based on category and shuffle
    if (selectedCategory === "general") {
        questions = shuffle([
            ...questionsByCategory["networking"],
            ...questionsByCategory["command"],
            ...questionsByCategory["OSI"],
            ...questionsByCategory["numberSystem"],
            ...questionsByCategory["SwitchingAlgebra"],
            ...questionsByCategory["Protocol"],
            ...questionsByCategory["IPADD"]
        ]);
    } else {
        questions = shuffle([...questionsByCategory[selectedCategory]]);
    }

    // Limit questions to 30
    questions = questions.slice(0, questionsLimit);

    // Hide category selection and show question container
    document.querySelector('.category-select').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('submit-btn').classList.remove('hidden');
    loadQuestion();
});

// Load each question in sequence
function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionElement = questionContainer.querySelector('.question');
    const answersElement = questionContainer.querySelector('.answers');

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    // Shuffle answers and display
    const shuffledAnswers = shuffle([...currentQuestion.answers]);
    answersElement.innerHTML = '';
    shuffledAnswers.forEach(answer => {
        answersElement.innerHTML += `
            <label>
                <input type="checkbox" name="answer" value="${answer}">
                ${answer}
            </label>
        `;
    });

    document.getElementById('result').innerText = '';
    document.getElementById('explanation').style.display = 'none';
    document.getElementById('incorrect-explanations').style.display = 'none';
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('prev-btn').classList.toggle('hidden', currentQuestionIndex === 0);
}

// Check answers and provide explanations
function checkAnswers() {
    const selectedAnswers = [...document.querySelectorAll('input[name="answer"]:checked')].map(checkbox => checkbox.value);
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswers.length === currentQuestion.correct.length &&
        selectedAnswers.every(answer => currentQuestion.correct.includes(answer));

    const resultElement = document.getElementById('result');
    const explanationElement = document.getElementById('explanation');
    const explanationText = document.getElementById('explanation-text');
    const incorrectExplanationsElement = document.getElementById('incorrect-explanations');
    const incorrectExplanationText = document.getElementById('incorrect-explanation-text');

    explanationText.innerText = currentQuestion.explanation;
    explanationElement.style.display = 'block';

    // Show the next button regardless of whether the answer is correct
    document.getElementById('next-btn').classList.remove('hidden');

    if (isCorrect) {
        correctAnswersCount++;
        resultElement.innerText = "Richtig!";
        masteredQuestions.push(currentQuestion.question);
    } else {
        incorrectAnswersCount++;
        resultElement.innerText = "Falsch!";
        needsPracticeQuestions.push(currentQuestion.question);
        const incorrectExplanations = Object.entries(currentQuestion.incorrectExplanations).map(([answer, explanation]) => `${answer}: ${explanation}`).join('<br>');
        incorrectExplanationText.innerHTML = incorrectExplanations;
        incorrectExplanationsElement.style.display = 'block'; // Show incorrect explanations
    }

    updateMasteryStatus();
    document.getElementById('next-btn').classList.remove('hidden'); // Always show Next button
}

// Update mastery status after each question
function updateMasteryStatus() {
    const masteryElement = document.getElementById('mastery-status');
    const masteryText = document.getElementById('mastery-text');
    masteryText.innerText = `Richtige Antworten: ${correctAnswersCount} / ${currentQuestionIndex + 1}`;
    masteryElement.classList.remove('hidden');
}

// Handle the next question
document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Handle the previous question
document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

// Show quiz results and review questions
function showResults() {
    const progressSummary = document.getElementById('progress-summary');
    const correctCountElement = document.getElementById('correct-count');
    const incorrectCountElement = document.getElementById('incorrect-count');
    const masteredQuestionsElement = document.getElementById('mastered-questions');
    const needsPracticeQuestionsElement = document.getElementById('needs-practice-questions');
    const percentageScoreElement = document.getElementById('percentage-score');

    correctCountElement.innerText = `Richtige Antworten: ${correctAnswersCount}`;
    incorrectCountElement.innerText = `Falsche Antworten: ${incorrectAnswersCount}`;
    masteredQuestionsElement.innerText = `Meisterhafte Fragen: ${masteredQuestions.length}`;
    needsPracticeQuestionsElement.innerText = `Fragen, die Übung benötigen: ${needsPracticeQuestions.length}`;
    const percentageScore = ((correctAnswersCount / questions.length) * 100).toFixed(2);
    percentageScoreElement.innerText = `Punktzahl: ${percentageScore}%`;

    progressSummary.classList.remove('hidden');
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('submit-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('prev-btn').classList.add('hidden');
}

// Navigate back to the main page
document.getElementById('main-page-btn').addEventListener('click', () => {
    // Reset all quiz-related variables
    selectedCategory = '';
    currentQuestionIndex = 0;
    questions = [];
    correctAnswersCount = 0;
    incorrectAnswersCount = 0;
    masteredQuestions = [];
    needsPracticeQuestions = [];

    // Show category selection and hide quiz elements
    document.querySelector('.category-select').classList.remove('hidden');
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('submit-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('prev-btn').classList.add('hidden');
    document.getElementById('progress-summary').classList.add('hidden');
});

// Submit answer for each question
document.getElementById('submit-btn').addEventListener('click', checkAnswers);

