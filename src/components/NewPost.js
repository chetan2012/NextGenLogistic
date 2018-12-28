import React from 'react';


const stylesApp = {
  marginTop: 40
}

class NewPost extends React.Component {
  state = {
    title: '',
    body: ''
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      this.props.onAddPost(this.state);
      this.handleReset();
    }
  };


  handleReset = () => {
    this.setState({
      title: '',
      body: ''
    });
  };

  render() {
    let successMsg = null;
    if (this.props.status.success) {
      successMsg = <span>{this.props.status.message}</span>;
      	setTimeout(() => {
				this.props.clearMessage();
			}, 1000);
    }
    return (
      <div>
        {successMsg}
        <div className="container">
          <div className="row" style={stylesApp}>

            <div className="col-md-6">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Title"
                    className="form-control"
                    name="title"
                    onChange={this.handleInputChange}
                    value={this.state.title}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    cols="19"
                    rows="8"
                    placeholder="Body"
                    className="form-control"
                    name="body"
                    onChange={this.handleInputChange}
                    value={this.state.body}>
                  </textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">Add Post</button>
                  &nbsp; &nbsp;
            <button type="button" className="btn btn-warning" onClick={this.handleReset}>
                    Reset
            </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPost;