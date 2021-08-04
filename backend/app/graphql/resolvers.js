const Article = require('../models/article');

exports.articles = () => {
    return Article.find({});
}

exports.article = (args) => {
    return Article.findById(args.id);
}

exports.createArticle = (args) => {
    let article = new Article(args.articleInput);
    return article.save();
}

exports.deleteArticle = (args) => {
    return Article.findByIdAndRemove(args.id);
}

exports.updateArticle = (args) => {
    return Article.findByIdAndUpdate(args.id, args.articleInput, {new: true});
}


