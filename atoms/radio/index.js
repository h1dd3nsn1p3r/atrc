/*Library*/
import classnames from "classnames";

/*Inbuilt*/
import AtrcPrefix from "../../prefix-vars";

/*Local Components*/
const AtrcRadio = (props) =>{

    const {
        name = '',
        value = '',
        id = undefined,
        variant = '',
        className = '',
        ...defaultProps
    } = props;

    return (
        <input
            type="radio"
            name={ name }
            value={ value }
            id={id}
            className={
                classnames(
                    AtrcPrefix('radio'),
                    variant?AtrcPrefix('radio')+'-'+variant:'',
                )
            }
            { ...defaultProps }
        />
    )
}

export default AtrcRadio;