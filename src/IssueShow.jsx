import React from "react";
import ReactMarkdown from 'react-markdown';

const IssueShow = (props) => {
    let issue = props.issues.find( (issue) => {
    return issue.id === parseInt(props.match.params.id)
})
    if (issue) {
        return(
            <div>
                <h3>{issue.title}</h3>
                <h3>#{issue.id}</h3>
                <ReactMarkdown source={issue.body} />
            </div>
        )
    } else {
        return (
            <h3>loading...</h3>
        )
    }
}

export default IssueShow;
