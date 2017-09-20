const fs = require('fs');
const path = require('path');
const questionModel = require('./questionSchema');

//Working with question file
const getQuestionList = (callback) => {

    questionModel.find({}, function (err, questions) {
        if (err) {
            callback(err, null)
        } else
            callback(null, questions);
    });
};


const addNewQuestion = (question) => {
    return new Promise((resolve, reject) => {
        let newQuestion = {
            question
        };

        questionModel.create(newQuestion, (err, question) => {
            if (err) {
                reject(err);
            } else {
                resolve(question);
            }
        });
    })
};

const answerQuestion = (id, answer) => {
    let question = getQuestionById(id);
    let answerResult = getAnswer(answer);

    if (answerResult) {
        if (answerResult === 'no') {
            question.no = question.no + 1;
        } else if (answerResult === 'yes') {
            question.yes = question.yes + 1;
        } else {
            console.log('invalid answer');
        }

        saveQuestion(id, question);
        return id;
    } else {
        return null;
    }
};


const getQuestionById = (id, callback) => {

    questionModel.findOne({_id: id}, (err, questions) => {
        if (err) {
            console.log(err);
            callback(err, null);
        } else {
            callback(null, questions);
        }
    })
}

const getRandomQuestion = (callback) => {
    getQuestionList(function (err, questions) {
        let id = Math.floor(Math.random() * (questions.length - 1));
        callback(questions[id]);
    });

}
const updateQuestion = (id, type, callback) => {
    const query = {_id: id};
    getQuestionById(id, function (err, question) {
        if (type === 'yes') {
            questionModel.findOneAndUpdate(query, {$set: {yes: question.yes + 1}}, {}, callback);
        }
        else {
            questionModel.findOneAndUpdate(query, {$set: {no: question.no - 1}}, {}, callback);
        }
    })

}


module.exports = {
    answerQuestion,
    getQuestionById,
    addNewQuestion,
    getRandomQuestion,
    updateQuestion
}
