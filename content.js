async function copyTitleToClipboard() {

  let plainText = window.location.href;

  let pageTitle = document.title.split(/\s+[-–—|]\s+/);

  if (pageTitle.length > 1) {
    pageTitle = pageTitle.slice(0, -1).join(': ');
  }

  let hostName = window.location.hostname.replace(/^www\./, '');

  let title = pageTitle + ` (${hostName})`;
  let htmlText = `<a href="${window.location.href}">${title}</a>`;

  const htmlBlob = new Blob([htmlText], { type: 'text/html' });
  const textBlob = new Blob([plainText], { type: 'text/plain' });

  const clipboardItem = new ClipboardItem({
    'text/html': htmlBlob,
    'text/plain': textBlob,
  });

  await navigator.clipboard.
    write([clipboardItem]).
    catch((err) => {
      alert('failed to write to clipboard: ' + err.message);
    });

}

(async () => {
  await copyTitleToClipboard();
})();
