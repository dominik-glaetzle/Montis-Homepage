export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-black bg-white">
      <h1 className="text-3xl font-bold text-[#0088cc]">
        Datenschutzerklärung – Montis
      </h1>
      <p className="mt-2">
        <strong>Stand:</strong> Oktober 2025
      </p>

      <section className="mt-10 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-[#0088cc]">
            1. Verantwortlicher
          </h2>
          <p>
            Diese App wird betrieben von:
            <br />
            <strong>Dominik Glätzle</strong>
            <br />
            E-Mail:{" "}
            <a
              href="mailto:dominik@glaetzle.io"
              className="text-[#0088cc] hover:underline"
            >
              dominik@glaetzle.io
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#0088cc]">
            2. Zweck der App
          </h2>
          <p>
            Montis ist eine mobile Anwendung, die aktuelle Lawinenberichte,
            Gefahrenstufen und Warnungen für Regionen in Österreich anzeigt. Es
            werden nur die für den Betrieb notwendigen personenbezogenen Daten
            verarbeitet.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#0088cc]">
            3. Erhobene Daten
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>E-Mail-Adresse</strong> – zur Benutzerverwaltung (Login
              via Appwrite)
            </li>
            <li>
              <strong>Push Notification Token</strong> – für Benachrichtigungen
            </li>
            <li>
              <strong>Regionale Favoriten</strong> – gespeichert in Appwrite zur
              Synchronisierung deiner abonnierten Regionen
            </li>
            <li>
              <strong>Telegram-Verknüpfung (optional)</strong> – Chat-ID für
              Warnmeldungen
            </li>
          </ul>
          <p>
            Es werden keine sensiblen Daten, Zahlungsdaten oder Werbe-IDs
            verarbeitet.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#0088cc]">
            4. Datenverarbeitung
          </h2>
          <p>
            Die Datenverarbeitung erfolgt über{" "}
            <strong>Appwrite Cloud Services</strong> (EU-Server). Alle
            Verbindungen sind verschlüsselt (HTTPS/TLS). Es werden nur minimal
            notwendige Daten gespeichert.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#0088cc]">
            5. Weitergabe an Dritte
          </h2>
          <p>Eine Weitergabe erfolgt nur an:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Telegram (bei aktiver Verknüpfung)</li>
            <li>Appwrite (als Hosting-Dienstleister)</li>
          </ul>
          <p>Keine Daten werden zu Werbe- oder Analysezwecken verwendet.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#0088cc]">
            6. Rechte der Nutzer
          </h2>
          <p>Du hast gemäß DSGVO das Recht auf:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung
            </li>
            <li>Datenübertragbarkeit und Widerspruch</li>
          </ul>
          <p>
            Anfragen bitte an{" "}
            <a
              href="mailto:dominik@glaetzle.io"
              className="text-[#0088cc] hover:underline"
            >
              dominik@glaetzle.io
            </a>
            . Dein Account kann jederzeit auf Anfrage gelöscht werden.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#0088cc]">
            7. Datensicherheit
          </h2>
          <p>
            Alle Daten werden über HTTPS übertragen. Passwörter werden
            verschlüsselt gespeichert (kein Klartext). Authentifizierung erfolgt
            über Appwrite.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#0088cc]">
            8. Änderungen
          </h2>
          <p>
            Diese Erklärung kann bei Änderungen der App oder rechtlicher
            Vorgaben angepasst werden. Das Datum der letzten Aktualisierung
            steht oben.
          </p>
        </div>

        <hr className="my-12 border-gray-300" />

        <h1 className="text-3xl font-bold text-[#0088cc]">
          Privacy Policy – English
        </h1>
        <p className="mt-2">
          <strong>Last updated:</strong> October 2025
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#0088cc]">
            1. Controller
          </h2>
          <p>
            This app is operated by:
            <br />
            <strong>Dominik Glätzle</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:dominik@glaetzle.io"
              className="text-[#0088cc] hover:underline"
            >
              dominik@glaetzle.io
            </a>
          </p>

          <h2 className="text-2xl font-semibold text-[#0088cc]">2. Purpose</h2>
          <p>
            Montis provides avalanche reports, danger levels, and alerts for
            Austrian regions. Only data required for operation is processed.
          </p>

          <h2 className="text-2xl font-semibold text-[#0088cc]">
            3. Data Collected
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Email address – for authentication via Appwrite</li>
            <li>Push token – for notifications</li>
            <li>
              Regional favorites – stored in Appwrite to sync your subscribed
              regions
            </li>
            <li>Telegram account (optional) – chat ID for alerts</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#0088cc]">
            4. Processing
          </h2>
          <p>
            All backend services are handled by{" "}
            <strong>Appwrite Cloud (EU)</strong>. Communication is encrypted
            (HTTPS/TLS).
          </p>

          <h2 className="text-2xl font-semibold text-[#0088cc]">5. Sharing</h2>
          <p>Data is only shared with:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Telegram (if linked)</li>
            <li>Appwrite (infrastructure provider)</li>
          </ul>
          <p>No analytics or ads are used.</p>

          <h2 className="text-2xl font-semibold text-[#0088cc]">
            6. User Rights
          </h2>
          <p>
            You may request access, correction, deletion, or restriction of your
            data. Contact{" "}
            <a
              href="mailto:dominik@glaetzle.io"
              className="text-[#0088cc] hover:underline"
            >
              dominik@glaetzle.io
            </a>{" "}
            for any request.
          </p>

          <h2 className="text-2xl font-semibold text-[#0088cc]">7. Security</h2>
          <p>All data transfers use HTTPS. Passwords are securely hashed.</p>

          <h2 className="text-2xl font-semibold text-[#0088cc]">8. Updates</h2>
          <p>
            This policy may be updated occasionally. The date of the latest
            version is listed above.
          </p>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-gray-700">
        © 2025 Montis – Dominik Glätzle
      </footer>
    </main>
  );
}
