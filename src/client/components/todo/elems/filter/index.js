import { Link } from 'react-router';
import Component, { PropTypes } from 'lib/component';
import styles from './styles.css';

export default class TodoFilter extends Component {
  /**
   * @override
   */
  render() {
    let stls = this.styles;
    let props = this.props;
    let value = props.value;
    let url = '/examples/todo' + (value ? '/' + value : value);

    return (
      <Link
        className={stls.filter}
        activeClassName={stls.filterIsActive}
        to={url}>
        {props.label}
      </Link>
    );
  }
}

TodoFilter.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

TodoFilter.styles = styles;