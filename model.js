var data = [
  {id: 1, name: "Anthony Wang", background: "Full-Stack Developer", year: "Senior", img: "imgs/me.jpg"},
  {id: 2, name: "Ivan Wu", background: "Team Mascot", year: "Senior", img: "imgs/ivan.jpg"},
  {id: 3, name: "Dilraj Singh", background: "Professional NBA player", year: "Senior", img: "imgs/diraj2.gif"},
  {id: 4, name: "Leo Wong", background: "Developer", year: "Junior", img: "imgs/leo.jpg"},
  {id: 5, name: "Hui Chen", background: "UPS Entension Student", year: "Senior", img: "imgs/hui2.png"},
  {id: 6, name: "Clement Roche", background: "UPS Extension Student", year: "--", img: "imgs/clement2.png"}
];

var InfoContainer = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var imgSrc = this.state.liked ? 'imgs/heart_full.png' : 'imgs/heart_border.png';
    return (
      <div className="my-info">
        <h3 className="name">{this.props.name}</h3>
        <h3 className="background">{this.props.background}</h3>
        <h3 className="year">{this.props.year}</h3>
        <div className="heart">
          <img src={imgSrc} onClick={this.handleClick}></img>
        </div>
      </div>
    );
  }
})

var ImageContainer = React.createClass({
  render: function() {
    return (
    <div className="img-container">
      <div className="inner-img-container">
        <img src={this.props.img} alt="Smiley face"/>
      </div>
    </div>
    );
  }
});

var GifContainer = React.createClass({
  render: function() {
    return (
    <div className="img-container">
        <img src={this.props.img} alt="Smiley face"/>
    </div>
    );
  }
});

var Profile = React.createClass({
  render: function() {
    var img = this.props.img;
    if (img.indexOf('.gif') > -1) {
      return (
        <div className="column-33 info-container">
          <div className="info">
            <GifContainer
              img={this.props.img}/>
            <InfoContainer
              name={this.props.name}
              background={this.props.background}
              year={this.props.year}
            />
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="column-33 info-container">
          <div className="info">
            <ImageContainer
              img={this.props.img}/>
            <InfoContainer
              name={this.props.name}
              background={this.props.background}
              year={this.props.year}
            />
          </div>
        </div>
      );
    }
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
