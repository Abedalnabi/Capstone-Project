import Text from './control/Text';
import Password from './control/Password';
import DatePicker from './control/DatePicker';
import Select from './control/Select';
import File from './control/File';

const FormControl = ({ control, ...rest }) => {
  switch (control) {
    case 'text':
      return <Text {...rest} />;
    case 'password':
      return <Password {...rest} />;
    case 'date':
      return <DatePicker {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'file':
      return <File {...rest} />;
    default:
      return;
  }
};

export default FormControl;
