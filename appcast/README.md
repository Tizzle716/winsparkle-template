# Appcast Directory

This directory contains the template and documentation for setting up your WinSparkle update feed.

## Files

- `appcast.xml`: Template XML file for your update feed
- `README.md`: This documentation file

## Setting Up Your Update Feed

1. Host the `appcast.xml` file on your web server
2. Update the file with your application's information:
   - Version number
   - Release notes
   - Download URL
   - DSA signature
3. Configure your application to use the hosted appcast URL

## Example Appcast

```xml
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle">
    <channel>
        <title>Your App - Updates</title>
        <description>Most recent changes with links to updates.</description>
        <language>en</language>
        <item>
            <title>Version 1.0.0</title>
            <sparkle:version>1.0.0</sparkle:version>
            <description>
                <![CDATA[
                    <h2>New Features</h2>
                    <ul>
                        <li>Initial release</li>
                    </ul>
                ]]>
            </description>
            <pubDate>Wed, 09 Jan 2024 12:00:00 +0000</pubDate>
            <enclosure
                url="https://updates.yourcompany.com/YourApp-1.0.0.exe"
                sparkle:version="1.0.0"
                length="1234567"
                type="application/octet-stream"
                sparkle:dsaSignature="your_dsa_signature_here" />
        </item>
    </channel>
</rss>
```

## Security

- Always use HTTPS for your appcast URL
- Sign your updates using DSA signatures
- Keep your private key secure and backed up
- Never include your private key in the repository