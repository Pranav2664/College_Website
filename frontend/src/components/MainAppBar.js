import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const navItems = [
  "Home",
  "About Us",
  "Academics",
  "Exam Cell",
  "Research",
  "Department",
  "Admission",
  "Campus Life",
  "Facilities",
  "Placement",
  "e-office",
  "Career"
];

function MainAppBar({ logo, darkMode, handleThemeChange, handleApplyClick, navValue, setNavValue }) {
  return (
    <AppBar
      position="static"
      elevation={3}
      sx={{
        background: 'linear-gradient(90deg, #1746a2 0%, #21c1d6 100%)',
        borderRadius: 4,
        boxShadow: '0 4px 24px 0 rgba(33,193,214,0.12)',
        mx: { xs: 0, md: 2 },
        mt: 2,
        px: { xs: 1, md: 3 },
        py: 1,
        minHeight: 80,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Toolbar sx={{ background: 'transparent', minHeight: 64, px: 0 }}>

        {/* Mobile Menu */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, color: '#fff' }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo + Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img src={logo} alt="DYP Logo" style={{ height: 54, borderRadius: 8 }} />
          <Typography
            variant="h5"
            sx={{
              color: '#fff',
              fontWeight: 800,
              fontSize: { xs: '1.1rem', md: '2rem' },
              whiteSpace: 'nowrap'
            }}
          >
            D.Y.Patil College Of Engineering & Technology Kolhapur
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Light/Dark Toggle */}
        <Switch checked={darkMode} onChange={handleThemeChange} color="default" />

        {/* Apply Button */}
        <Button
          variant="contained"
          sx={{
            background: 'linear-gradient(90deg, #a80000 0%, #fcb045 100%)',
            borderRadius: 3,
            fontWeight: 700,
            textTransform: 'none',
            px: 3,
            height: 40,
            color: '#fff',
            '&:hover': {
              background: 'linear-gradient(90deg, #fcb045 0%, #a80000 100%)'
            }
          }}
          onClick={handleApplyClick}
        >
          Apply Now
        </Button>
      </Toolbar>

      {/* Navigation Tabs */}
      <Tabs
        value={navValue}
        onChange={(e, newValue) => setNavValue(newValue)}
        sx={{
          mt: 1,
          '& .MuiTab-root': { color: '#fff', fontWeight: 400, textTransform: 'none' },
          '& .Mui-selected': { color: '#a80000', fontWeight: 600 }
        }}
        TabIndicatorProps={{ style: { display: 'none' } }}
      >
        {navItems.map((item) => (
          <Tab key={item} label={item} />
        ))}
      </Tabs>

    </AppBar>
  );
}

export default MainAppBar;
