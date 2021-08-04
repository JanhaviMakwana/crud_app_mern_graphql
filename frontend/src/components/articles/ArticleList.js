
import React from 'react';
import {Query} from 'react-apollo';
import {Link} from 'react-router-dom';
import {GET_ARTICLES} from '../graphgl/articleQueries';

const ArticleList = () => {
    return (
        <div>
            <h2>ArticleList
                <Link to="/articles/new" className="btn btn-primary float-right">Create Aricle</Link>
            </h2>
            <Query query={GET_ARTICLES}>
                {
                    function({loading, error, data}) {
                        if(loading) return "Loading...";
                        if(error) return `Error! ${error.message}`;
                        const {articles} = data;
                        return (
                            articles.map((article) => {
                                console.log(article);
                                return (
                                    <div key={article.id}>
                                        <hr/>
                                        <h4><Link to={`/articles/${article.id}`}>{article.title}</Link></h4>
                                <small>id: {article.id}</small>
                                    </div>
                                )
                            })
                        );
                    }
                }
            </Query>
        </div>
    )
}

export default ArticleList;