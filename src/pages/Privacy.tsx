export default function Privacy() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <article className="space-y-8">
            <header>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0187CC] dark:text-[#0187CC]">
                Datenschutzerklärung – Montis
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                <strong>Stand:</strong> Oktober 2025
              </p>
            </header>

            <div className="space-y-8">
              <Section title="1. Verantwortlicher">
                <p>
                  Diese App wird betrieben von:
                  <br />
                  <strong>Dominik Glätzle</strong>
                  <br />
                  E-Mail:{" "}
                  <a
                    href="mailto:dominik@glaetzle.io"
                    className="text-[#0187CC] dark:[##0187CC] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 rounded"
                  >
                    dominik@glaetzle.io
                  </a>
                </p>
              </Section>

              <Section title="2. Zweck der App">
                <p>
                  Montis ist eine mobile Anwendung, die aktuelle
                  Lawinenberichte, Gefahrenstufen und Warnungen für Regionen in
                  Österreich anzeigt. Es werden nur die für den Betrieb
                  notwendigen personenbezogenen Daten verarbeitet.
                </p>
              </Section>

              <Section title="3. Erhobene Daten">
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>E-Mail-Adresse</strong> – zur Benutzerverwaltung
                    (Login via Appwrite)
                  </li>
                  <li>
                    <strong>Push Notification Token</strong> – für
                    Benachrichtigungen
                  </li>
                  <li>
                    <strong>Regionale Favoriten</strong> – gespeichert in
                    Appwrite zur Synchronisierung deiner abonnierten Regionen
                  </li>
                  <li>
                    <strong>Telegram-Verknüpfung (optional)</strong> – Chat-ID
                    für Warnmeldungen
                  </li>
                </ul>
                <p>
                  Es werden keine sensiblen Daten, Zahlungsdaten oder Werbe-IDs
                  verarbeitet.
                </p>
              </Section>

              <Section title="4. Datenverarbeitung">
                <p>
                  Die Datenverarbeitung erfolgt über{" "}
                  <strong>Appwrite Cloud Services</strong> (EU-Server). Alle
                  Verbindungen sind verschlüsselt (HTTPS/TLS). Es werden nur
                  minimal notwendige Daten gespeichert.
                </p>
              </Section>

              <Section title="5. Weitergabe an Dritte">
                <p>Eine Weitergabe erfolgt nur an:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Telegram (bei aktiver Verknüpfung)</li>
                  <li>Appwrite (als Hosting-Dienstleister)</li>
                </ul>
                <p>
                  Keine Daten werden zu Werbe- oder Analysezwecken verwendet.
                </p>
              </Section>

              <Section title="6. Rechte der Nutzer">
                <p>Du hast gemäß DSGVO das Recht auf:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Auskunft, Berichtigung, Löschung, Einschränkung der
                    Verarbeitung
                  </li>
                  <li>Datenübertragbarkeit und Widerspruch</li>
                </ul>
                <p>
                  Anfragen bitte an{" "}
                  <a
                    href="mailto:dev@glaetzle.io"
                    className="text-[#0187CC] dark:text-[##0187CC] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 rounded"
                  >
                    dev@glaetzle.io
                  </a>
                  . Dein Account kann jederzeit auf Anfrage gelöscht werden.
                </p>
              </Section>

              <Section title="7. Datensicherheit">
                <p>
                  Alle Daten werden über HTTPS übertragen. Passwörter werden
                  verschlüsselt gespeichert (kein Klartext). Authentifizierung
                  erfolgt über Appwrite.
                </p>
              </Section>

              <Section title="8. Änderungen">
                <p>
                  Diese Erklärung kann bei Änderungen der App oder rechtlicher
                  Vorgaben angepasst werden. Das Datum der letzten
                  Aktualisierung steht oben.
                </p>
              </Section>
            </div>
          </article>

          {/* ===== English ===== */}
          <article className="space-y-8">
            <header>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0187CC] dark:text-[#0187CC]">
                Privacy Policy – English
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                <strong>Last updated:</strong> October 2025
              </p>
            </header>

            <div className="space-y-8">
              <Section title="1. Controller">
                <p>
                  This app is operated by:
                  <br />
                  <strong>Dominik Glätzle</strong>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:dominik@glaetzle.io"
                    className="text-[#0187CC] dark:text-[#0187CC] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 rounded"
                  >
                    dominik@glaetzle.io
                  </a>
                </p>
              </Section>

              <Section title="2. Purpose">
                <p>
                  Montis provides avalanche reports, danger levels, and alerts
                  for Austrian regions. Only data required for operation is
                  processed.
                </p>
              </Section>

              <Section title="3. Data Collected">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Email address – for authentication via Appwrite</li>
                  <li>Push token – for notifications</li>
                  <li>
                    Regional favorites – stored in Appwrite to sync your
                    subscribed regions
                  </li>
                  <li>Telegram account (optional) – chat ID for alerts</li>
                </ul>
              </Section>

              <Section title="4. Processing">
                <p>
                  All backend services are handled by{" "}
                  <strong>Appwrite Cloud (EU)</strong>. Communication is
                  encrypted (HTTPS/TLS).
                </p>
              </Section>

              <Section title="5. Sharing">
                <p>Data is only shared with:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Telegram (if linked)</li>
                  <li>Appwrite (infrastructure provider)</li>
                </ul>
                <p>No analytics or ads are used.</p>
              </Section>

              <Section title="6. User Rights">
                <p>
                  You may request access, correction, deletion, or restriction
                  of your data. Contact{" "}
                  <a
                    href="mailto:dev@glaetzle.io"
                    className="text-[#0187CC] dark:text-[#0187CC] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 rounded"
                  >
                    dev@glaetzle.io
                  </a>{" "}
                  for any request.
                </p>
              </Section>

              <Section title="7. Security">
                <p>
                  All data transfers use HTTPS. Passwords are securely hashed.
                </p>
              </Section>

              <Section title="8. Updates">
                <p>
                  This policy may be updated occasionally. The date of the
                  latest version is listed above.
                </p>
              </Section>
            </div>
          </article>
        </section>

        <hr className="my-12 border-slate-200 dark:border-slate-700" />

        <footer className="text-center text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          © 2025 Montis – Dominik Glätzle
        </footer>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 sm:p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-800/60">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#0187CC] dark:text-[#0187CC]">
        {title}
      </h2>
      <div className="mt-3 space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}
