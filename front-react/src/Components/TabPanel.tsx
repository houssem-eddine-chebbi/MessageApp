import {Box, Typography} from "@material-ui/core";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

export default (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={ { width: '100%'}}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}