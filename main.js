document.getElementById('inputKg').addEventListener('input', function (e) {
  let kgs = e.target.value;
  document.getElementById('gramOutput').innerHTML = kgs*1000;
  document.getElementById('lbsOutput').innerHTML = kgs*2.2046;
  document.getElementById('ozOutput').innerHTML = kgs*35.2739619;
});
