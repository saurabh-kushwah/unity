async function copyTitleToClipboard() {

  let plainText = window.location.href;

  let title = document.title.split(/\s+[-–—|]\s+/)[0] + ` (${window.location.host})`;
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
