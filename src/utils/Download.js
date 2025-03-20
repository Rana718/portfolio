const downloadResume = (filename = "Rana_Dolui.pdf") => {
  const link = document.createElement('a');
  link.href = `/${filename}`;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default downloadResume;


