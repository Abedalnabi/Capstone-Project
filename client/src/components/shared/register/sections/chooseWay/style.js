const style = {
  registerWay: {
    typographyStyle: {
      margin: 'auto',
      alignItems: 'center',
      textAlign: 'center',
      pt: '116px',
      fontWeight: 'bold',
      fontSize: '32px',
    },
    gridStyle: {
      height: '',
      margin: 0,
      mt: { xs: '50px', sm: '70px' },
      rowGap: '15px',
    },
  },
  registerWayCard: {
    gridStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '90%', sm: '50%', md: '40%' },
    },
    boxStyle: {
      width: { xs: '100%', sm: '170px', md: '200px' },
    },
    cardStyle: {
      width: { xs: '100%', sm: '100%', md: '100%' },
      pl: 2,
      pr: 2,
      maxHeight: '500px',
      minHeight: '300px',
      position: 'relative',
    },
    cardMediaStyle: {
      width: '100px',
      height: '100px',
      mb: '10px',
      mt: '10px',
    },
    cardContentStyle: {
      p: 1,
      m: 0,
    },
    cardActions: {
      p: 0,
      position: 'absolute',
      bottom: '15px',
    },
  },
};

export default style;
