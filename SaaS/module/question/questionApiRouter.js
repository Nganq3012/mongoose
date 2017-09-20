const router = require('express').Router();

const {answerQuestion, getQuestionById, addNewQuestion, getRandomQuestion, updateQuestion} = require('./questionController'); //ES6 destructuring

router.post('/', (req, res) => {
    let question = req.body.question;

    addNewQuestion(question)
        .then((question) => res.redirect(`/question/${question._id}`))
        .catch((err) => console.log(err));
});

router.post('/:id', (req, res) => {
    const id = req.params.id;
    console.log('post', req.body);
    if (req.body.yes) {
        console.log('yes', req.body);
        updateQuestion(id, "yes", function () {
            res.redirect(`/question/${id}`);
        })
    } else {
        console.log('no', req.body);
        updateQuestion(id, "no", function () {
            res.redirect(`/question/${id}`);
        })
    }

});

router.get('/', (req, res) => {
    console.log('ccqq')
    getRandomQuestion(function (question) {
        console.log(question);
        res.render('home', {
            question: question,
            questionView: "class='active'"
        });
    });
})

router.get('/:id', (req, res) => {
    let id = req.params.id;
    let question = getQuestionById(id);

    res.send(question);
});

module.exports = router;
