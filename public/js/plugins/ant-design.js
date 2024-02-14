import { Button, Menu, Input, Form, DatePicker, Select, Modal, notification } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, CalendarOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

// Ant Design components initialization
const AntDesignComponents = {
  Button,
  Menu,
  Input,
  Form,
  DatePicker,
  Select,
  Modal,
  notification,
  Icons: {
    UserOutlined,
    LockOutlined,
    MailOutlined,
    CalendarOutlined
  },
  SubMenu,
  Option,
  TextArea,
  RangePicker
};

export default AntDesignComponents;