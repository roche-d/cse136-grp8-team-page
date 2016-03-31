var data = [
  {id: 1, name: "Anthony Wang", background: "Full-Stack Developer", year: "Senior", img: "imgs/me.jpg"},
  {id: 2, name: "Israel Cruz", background: "This is a background", year: "FILL", img: ""},
  {id: 3, name: "Ivan Wu", background: "This is another background", year: "FILL", img: ""},
  {id: 4, name: "Dilraj Singh", background: "This is also a background", year: "FILL", img: ""},
  {id: 5, name: "Leo Wong", background: "This is the background", year: "FILL", img: ""},
  {id: 6, name: "Hui Chen", background: "This is the background", year: "FILL", img: ""},
  {id: 7, name: "Clement Roche", background: "UPS Extension Student", year: "FILL", img: ""}
];


var Profile = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var imgSrc = this.state.liked ? 'imgs/heart_full.png' : 'imgs/heart_border.png';
    return (
      <div className="column-33 info-container">
        <div className="info">
          <div className="img-container">
            <div className="inner-img-container">
              <img src={this.props.img} alt="Smiley face"/>
            </div>
          </div>
          <div className="my-info">
            <h3 className="name">{this.props.name}</h3>
            <h3 className="background">{this.props.background}</h3>
            <h3 className="year">{this.props.year}</h3>
            <div className="heart">
              <img src={imgSrc} onClick={this.handleClick}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var ProfileList = React.createClass({
  render: function() {
    var profileNodes = this.props.data.map(function(profile) {
      return (

        <Profile name={profile.name}
                 background={profile.background}
                 img={profile.img}
                 year={profile.year}
                 key={profile.id}>
        </Profile>

      );
    });
    return (
      <div>
        {profileNodes}
      </div>
    );
  }
});

var ProfileBox = React.createClass({
  render: function() {
    return (
      <ProfileList data={this.props.data} />
    );
  }
});

ReactDOM.render(
  <ProfileBox data={data} />,
  document.getElementById('team-container')
);
