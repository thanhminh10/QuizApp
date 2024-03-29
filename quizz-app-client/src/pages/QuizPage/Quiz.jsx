
import test from "../../assets/test.jpg" 
export default function Quiz() {
  return (
  <div className="container">
    <div className="d-flex flex-column quiz-content w-full row">
      <section className="question-wrapper col-lg-6 col-md-12 col-sm-12">
          <div className="question-box">
            <div className="question-box__img">
              <img src={test} alt="Logo" />
            </div>
            <div className="question-box__text"></div>

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
