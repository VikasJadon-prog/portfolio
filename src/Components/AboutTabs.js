import React from 'react';
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

export default function AboutTabs() {
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
   
       <ul className="AboutTabs-CustomTabPanel-li-ui">
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>User experience design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - UI/UX</span>
              <br />
            </a>
            <span>Delight the user and make it work.</span>
          </li>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a'href='xyz'>Web and user interface design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Devlopment</span>
              <br />
            </a>
            <span>Websites, web experiences, ...</span>
          </li>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>Interaction design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Animation</span>
              <br />
            </a>
            <span>I like to move it move it.</span>
          </li>

        </ul>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className='customtab'>
   
       <ul className="AboutTabs-CustomTabPanel-li-ui">
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>User experience design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - UI/UX</span>
              <br />
            </a>
            <span>Delight the user and make it work.</span>
          </li>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a'href='xyz'>Web and user interface design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Devlopment</span>
              <br />
            </a>
            <span>Websites, web experiences, ...</span>
          </li>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>Interaction design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Animation</span>
              <br />
            </a>
            <span>I like to move it move it.</span>
          </li>
        </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} className='customtab'>

       <ul className="AboutTabs-CustomTabPanel-li-ui">
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>User experience design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - UI/UX</span>
              <br />
            </a>
            <span>Delight the user and make it work.</span>
          </li>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a'href='xyz'>Web and user interface design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Devlopment</span>
              <br />
            </a>
            <span>Websites, web experiences, ...</span>
          </li>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>Interaction design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Animation</span>
              <br />
            </a>
            <span>I like to move it move it.</span>
          </li>

        </ul>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={3} className='customtab'>

       <ul className="AboutTabs-CustomTabPanel-li-ui">
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>User experience design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - UI/UX</span>
              <br />
            </a>
            <span>Delight the user and make it work.</span>
          </li>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a'href='xyz'>Web and user interface design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Devlopment</span>
              <br />
            </a>
            <span>Websites, web experiences, ...</span>
          </li>
          <li className='AboutTabs-CustomTabPanel-li'>
            <a className='AboutTabs-CustomTabPanel-li-a' href='xyz'>Interaction design
              <span className='AboutTabs-CustomTabPanel-li-a-span'> - Animation</span>
              <br />
            </a>
            <span>I like to move it move it.</span>
          </li>

        </ul>

      </CustomTabPanel>  
    </Box>
  );
}