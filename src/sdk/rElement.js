import Vue from 'vue';
/**
 * Element Componentのインポート
 */
import {
  Pagination,
  Dialog,
  // Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  // CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  // OptionGroup,
  Button,
  ButtonGroup,
  // Table,
  // TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  // Breadcrumb,
  // BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  // Tag,
  // Tree,
  Alert,
  // Slider,
  Icon,
  Row,
  Col,
  Upload,
  // Progress,
  Spinner,
  // Badge,
  Card,
  // Rate,
  Steps,
  Step,
  // Carousel,
  // CarouselItem,
  Collapse,
  CollapseItem,
  // Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  // Timeline,
  // TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  // Backtop,
  // PageHeader,
  // CascaderPanel,
  Loading,
  MessageBox,
  Message,
  Notification,
  Scrollbar,
} from 'element-ui';
import elJa from 'element-ui/lib/locale/lang/ja';
import locale from 'element-ui/lib/locale';
import './element-variables.scss';

const elOptions = {
  size: 'mini',
};

const rElement = new Vue({
  name: 'rElement',
  methods: {
    /**
     * モジュールを初期化します
     * @returns {void}
     */
    init() {
      // グローバルオプションを設定
      Vue.prototype.$ELEMENT = elOptions;

      // 日本語化
      locale.use(elJa);

      /**
       * 高速開発FWでラップしているComponent
       * →"el-xx"の名前でインポート
       */
      Vue.component(Dialog.name, Dialog);
      Vue.component(Input.name, Input);
      Vue.component(InputNumber.name, InputNumber);
      Vue.component(RadioGroup.name, RadioGroup);
      Vue.component(CheckboxGroup.name, CheckboxGroup);
      Vue.component(Select.name, Select);
      Vue.component(Option.name, Option);
      Vue.component(DatePicker.name, DatePicker);
      Vue.component(TimeSelect.name, TimeSelect);
      Vue.component(Upload.name, Upload);
      Vue.component(Steps.name, Steps);
      Vue.component(Step.name, Step);

      /**
       * Other Component
       */
      Vue.component(Alert.name, Alert);
      Vue.component(Icon.name, Icon);
      Vue.component(Spinner.name, Spinner); // loadingで使う

      Vue.use(Loading.directive);
      Vue.prototype.$loading = Loading.service;
      Vue.prototype.$msgbox = MessageBox;
      Vue.prototype.$alert = MessageBox.alert;
      Vue.prototype.$confirm = MessageBox.confirm;
      Vue.prototype.$prompt = MessageBox.prompt;
      Vue.prototype.$notify = Notification;
      Vue.prototype.$message = Message;

      //sol add
      Vue.component(ColorPicker.name, ColorPicker);
      Vue.component(Switch.name, Switch);
      Vue.component(Container.name, Container);
      Vue.component(Header.name, Header);
      Vue.component(Aside.name, Aside);
      Vue.component(Main.name, Main);
      Vue.component(Footer.name, Footer);
      Vue.component(RadioButton.name, RadioButton);
      Vue.component(Dropdown.name, Dropdown);
      Vue.component(DropdownMenu.name, DropdownMenu);
      Vue.component(DropdownItem.name, DropdownItem);
      Vue.component(Card.name, Card);
      Vue.component(Scrollbar.name, Scrollbar);
      Vue.component(Form.name, Form);
      Vue.component(FormItem.name, FormItem);
      Vue.component(Row.name, Row);
      Vue.component(Col.name, Col);

      /**
       * 高速開発FWでラップしないComponent
       * →"ra-xx"の名前でインポート
       */
      Vue.component('RaPagination', Pagination);
      Vue.component('RaMenu', Menu);
      Vue.component('RaSubmenu', Submenu);
      Vue.component('RaMenuItem', MenuItem);
      Vue.component('RaMenuItemGroup', MenuItemGroup);
      Vue.component('RaButton', Button);
      Vue.component('RaButtonGroup', ButtonGroup);
      // Vue.component('RaTable', Table);
      // Vue.component('RaTableColumn', TableColumn);
      Vue.component('RaTimePicker', TimePicker);
      Vue.component('RaPopover', Popover);
      Vue.component('RaTooltip', Tooltip);
      Vue.component('RaTabs', Tabs);
      Vue.component('RaTabPane', TabPane);
      Vue.component('RaCollapse', Collapse);
      Vue.component('RaCollapseItem', CollapseItem);
      Vue.component('RaTransfer', Transfer);
      Vue.component('RaLink', Link);
      Vue.component('RaDivider', Divider);
      Vue.component('RaImage', Image);
      Vue.component('RaCalendar', Calendar);
      Vue.component('RaRadio', Radio);
      Vue.component(Checkbox.name, Checkbox);
    },
  },
});

export default rElement;
