const clear = () => {
  const element = document.getElementById('form');
  if (element) {
    element.parentNode.removeChild(element);
  }
};

export default clear;