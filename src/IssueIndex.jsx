import React from 'react';
import {Link} from "react-router-dom"

const IssueIndex = (props) => {
    const issues = props.issues.map((issue, index) => (
        <div key={index}>
            <h3><Link to={`/issue/${issue.id}`}>* OPEN </Link> {" "} {issue.title}</h3>
            <p>{issue.body}</p>
        </div>
    ))

    return (
        <div className="issue-box">
            <h1 id="issue-header">⚠️ 100 Open Issues</h1>
            {issues}
        </div>
        );
    }


export default IssueIndex;