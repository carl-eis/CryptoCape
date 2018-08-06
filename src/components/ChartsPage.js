import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SimpleMediaCard from './SimpleMediaCard';
import OurChart from './OurChart';
import Grid from '@material-ui/core/Grid';
import ChartMenuMiniCard from './ChartMenuMiniCard';
import EthereumLogo from '../img/coins/ethereum.svg';
import AragonLogo from '../img/coins/aragon.svg';
import District0x from '../img/coins/district0x.svg'
import svg0x from '../img/coins/0x.svg';
import BATsvg from '../img/coins/basic-attention-token.svg';
import GolemLogo from '../img/coins/golem.svg';
import AugurLogo from '../img/coins/augur.svg';
import StatusLogo from '../img/coins/status.svg';
import OmisegoLogo from '../img/coins/omisego.svg'; 
import BloomLogo from '../img/coins/bloom.svg';
import RaidenLogo from '../img/coins/raiden.svg';
import {Link, withRouter} from 'react-router-dom';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} className="mobile-friendly-padding" style={{ justifyContent:'space-between', height:'calc(100%)' }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  }
});

class ChartsPage extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props){
    super(props);
  }

  state = {
    value: this.props.renderChart ? 1 : 0,
    chartLink: this.props.renderChart ? this.props.renderChart : false,
    disableChart: this.props.renderChart ? false : true
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme, match, location, history } = this.props;
    const { value, chartLink, disableChart } = this.state;

    let disableChartStyle = {};
    if(disableChart) {
      disableChartStyle = {opacity:'0'}
    }

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
        <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="off"
            fullWidth
          >
            <Tab label="Menu" onClick={() => { history.push('/charts')}} />
            <Tab label="Chart" disabled={disableChart} style={disableChartStyle}/>
          </Tabs>
        </AppBar>
          {value === 0 &&
          <TabContainer dir={theme.direction}>
          <Grid container spacing={24}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ChartMenuMiniCard
                  externalLink={"https://www.ethereum.org/"}
                  headline={"ETH"}
                  subHeadline={"Ethereum"}
                  chartLink={"ethereum"}
                  image={EthereumLogo} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ChartMenuMiniCard
                externalLink={"https://aragon.org/"} 
                headline={"ANT"} 
                subHeadline={"Aragon"}
                chartLink={"aragon"}
                image={AragonLogo} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ChartMenuMiniCard 
                externalLink={"https://district0x.io/"}
                headline={"DNT"}
                subHeadline={"District0x"}
                chartLink={"district0x"}
                image={District0x} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ChartMenuMiniCard
                externalLink={"https://0xproject.com/"}
                headline={"ZRX"}
                subHeadline={"0x"}
                chartLink={"0x"}
                image={svg0x} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ChartMenuMiniCard
                externalLink={"https://basicattentiontoken.org/"}
                headline={"BAT"}
                subHeadline={"Basic Attention Token"}
                chartLink={"basic-attention-token"}
                image={BATsvg} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ChartMenuMiniCard
                externalLink={"https://raiden.network/"}
                headline={"RDN"}
                subHeadline={"Raiden Network"}
                chartLink={"raiden"}
                image={RaidenLogo} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ChartMenuMiniCard
                externalLink={"https://golem.network/"}
                headline={"GNT"}
                subHeadline={"Golem"}
                chartLink={"golem"}
                image={GolemLogo} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ChartMenuMiniCard 
                externalLink={"https://omisego.network/"} 
                headline={"OMG"} 
                subHeadline={"OmiseGO"}
                chartLink={"omisego"}
                image={OmisegoLogo} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ChartMenuMiniCard
                externalLink={"https://bloom.co"}
                headline={"BLT"}
                subHeadline={"Bloom"}
                chartLink={"bloom"}
                image={BloomLogo} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ChartMenuMiniCard
                externalLink={"https://www.augur.net/"}
                headline={"REP"}
                subHeadline={"Augur"}
                chartLink={"augur"}
                image={AugurLogo} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ChartMenuMiniCard
                externalLink={"https://status.im/"}
                headline={"SNT"}
                subHeadline={"Status"}
                chartLink={"status"}
                image={StatusLogo} />
              </Grid>
            </Grid>
          </TabContainer>
          }
          {value === 1 &&
          <TabContainer dir={theme.direction}>
            <div style={{ maxHeight: '500px' }}>
              <OurChart />
            </div>
          </TabContainer>
          }
      </div>
    );
  }
}

ChartsPage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(ChartsPage));