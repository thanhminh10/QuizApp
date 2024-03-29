
import test from "../../assets/test.jpg" 
export default function Quiz() {
  return (
  <div className="container">
    <div className="d-flex flex-column quiz-content w-full">
      <section className="question-wrapper">
          <div className="question-box row">
              <div className="bg-white col-lg-6 col-md-12 col-sm-12 rounded">
                <div className="question-box__img ">
                  <img src={test} alt="Logo" width="100%"/>
                </div>
            </div>
            <div className="question-box__text col-lg-6 col-md-12 col-sm-12">
               <p>
                Các quốc gia có mức độ hạnh phúc cao nhất trên thế giới. Trò chơi Angry Birds đến từ đất nước này. Vào mùa hè, đất nước này có 19 tiếng ban ngày. Vào mùa đông, có 19 tiếng ban đêm.
               </p>
            </div>

          </div>
      </section>

      <section className="answer-wrapper col-lg-6 col-md-12 col-sm-12">
          <div className="answer-box">trl 1</div>
          <div className="answer-box">trl 2</div>
          <div className="answer-box">trl 3</div>
          <div className="answer-box">trl 4</div>

      </section>
    </div>
  </div>
  )
}
