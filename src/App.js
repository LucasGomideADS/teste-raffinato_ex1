import './App.css';

export default function App() {

  function ContadorMinhoca() {

    var goal = 20
    var counter = 2
    var up = 5
    var down = 3
    var final = (up - down)
    var ye = document.querySelector('.yellow')
    var gr = document.querySelector('.green')
    var sec = 1

    const i = setInterval(function () {
      console.log("Posição => %d", counter, " Segundos =>", sec);
      counter+=final;
      sec++;

      if (counter === (goal/2 )) {
        console.log("Chegou na metade => %d", counter)
        ye.style.display = 'block';
      }

      if (counter === (goal + final)) {
        clearInterval(i);
        console.log("Fim!! => %d", (counter - final))

        window.location.reload()

        gr.style.display = 'block'
      }
    }, 1000);
  }

  return (
    <div className="App">
      <div className='block'>
        <h1>Solução para o teste da minhoca</h1>
        <p>Uma minhoca está num buraco de 20Cm de profundidade. Ela sobe 5cm por vez e cai
          3cm, sendo que cada vez que ela cai, ela pausa 1 segundo. Crie um programa que
          apresente um quadro amarelo na tela quando ela chegar na metade do caminho e um
          verde quando ela sair do Buraco. Apresentar também a quantidade de vezes que a
          minhoca subiu.</p>

        <button className='btn' onClick={ContadorMinhoca}>Aperte</button>

        <div className='yellow'>Metade!</div>
        <div className='green'>Fim!</div>
      </div>

      <footer>Developed by <a href='mailto:lucasgomidecv@gmail.com'>Lucas Gomide</a></footer>
    </div>
  );
}
