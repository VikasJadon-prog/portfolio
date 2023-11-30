import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{color:"white"}} className='tab' label="Main skills" {...a11yProps(0)} />
          <Tab sx={{color:"white"}} className='tab' label="Awards" {...a11yProps(1)} />
          <Tab sx={{color:"white"}} className='tab' label="Experience" {...a11yProps(2)} />
          <Tab sx={{color:"white"}} className='tab' label="Education & Certification" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} className='customtab'>
        <ui className="AboutTabs-CustomTabPanel-li-ui">
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>User experience design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - UI/UX</span>
              <br />
            </a>
            Delight the user and make it work.
          </li>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a'href='xyz'>Web and user interface design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Devlopment</span>
              <br />
            </a>
            Websites, web experiences, ...
          </li>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>Interaction design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Animation</span>
              <br />
            </a>
            I like to move it move it.
          </li>

        </ui>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className='customtab'>
        <ui>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>User experience design
              <span className='AboutTabs-CustomTabPanel-li-a-span' > - UI/UX</span>
              <br />
            </a>
            Delight the user and make it work.
          </li>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>Web and user interface design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Devlopment</span>
              <br />
            </a>
            Websites, web experiences, ...
          </li>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>Interaction design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Animation</span>
              <br />
            </a>
            I like to move it move it.
          </li>

        </ui>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} className='customtab'>
        <ui>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>Awwwwards.Com
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Winner</span>
              <br />
            </a>
            2019 - 2020
          </li>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>CSS design Awards
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Winner</span>
              <br />
            </a>
            2017 - 2018
          </li>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>Design Nominees
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - site of the day</span>
              <br />
            </a>
            2013- 2014
          </li>

        </ui>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3} className='customtab'>
        <ui>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>Sr. Front-end Engineer
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Google</span>
              <br />
            </a>
            2018 - Current
          </li>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>Front-end Engineer
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Microsoft</span>
              <br />
            </a>
            2017 - 2018
          </li>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>Software Engineer
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Alibaba</span>
              <br />
            </a>
            2013- 2014
          </li>

        </ui>
      </CustomTabPanel>
    </Box>
  );
}