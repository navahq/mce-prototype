import "./index.scss";
import { navigateTo, withPrefix } from "gatsby-link";
import Autocomplete from "@cmsgov/design-system-core/dist/components/Autocomplete/Autocomplete";
import Button from "@cmsgov/design-system-core/dist/components/Button/Button";
import PropTypes from "prop-types";
import React from "react";
import TextField from "@cmsgov/design-system-core/dist/components/TextField/TextField";
import _ from "lodash";

class Search extends React.PureComponent {
  constructor(props) {
    super(props);

    this.procedures = this.props.procedures.map(edge => ({
      id: edge.node.code,
      name: edge.node.name,
      searchIndex: this.transformSearchTerm(edge.node.name),
      slug: edge.node.fields.slug
    }));

    this.state = {
      // Procedure autocomplete options. We'll filter these as the user types
      procedureOptions: [].concat(this.procedures),
      procedureValue: ""
    };

    this.handleAutocompleteChange = this.handleAutocompleteChange.bind(this);
    this.handleCompareClick = this.handleCompareClick.bind(this);
    this.handleProcedureFieldChange = this.handleProcedureFieldChange.bind(
      this
    );
  }

  /**
   * Optimize a string to roughly provide fuzzy autocomplete search
   * @param {String} value
   * @returns {String}
   */
  transformSearchTerm(value) {
    return value.toLowerCase().replace(/\s/, "");
  }

  /**
   * Event handler for when an autocomplete option is selected
   */
  handleAutocompleteChange(procedure) {
    const slug = procedure ? procedure.slug : null;
    this.setState({ selectedProcedureSlug: slug });
  }

  /**
   * Event handler for the "Compare prices" button"
   */
  handleCompareClick() {
    if (this.state.selectedProcedureSlug) {
      return navigateTo(withPrefix(`/${this.state.selectedProcedureSlug}`));
    }
  }

  /**
   * Procedure field onChange handler, responsible for filtering
   * the autocomplete options
   * @param {SyntheticEvent} evt
   */
  handleProcedureFieldChange(evt) {
    const newValue = evt.target.value;
    const newValueIndex = this.transformSearchTerm(newValue);
    const newValueLength = newValue.length;
    let optionsPendingFilter;

    if (
      newValueLength > 2 &&
      newValueLength > this.state.procedureValue.length &&
      _.startsWith(newValue, this.state.procedureValue)
    ) {
      // Narrow our search on existing filtered options
      optionsPendingFilter = [].concat(this.state.procedureOptions);
    } else {
      // Widen our search
      optionsPendingFilter = this.procedures;
    }

    const procedureOptions = optionsPendingFilter.filter(
      procedure =>
        _.includes(procedure.searchIndex, newValueIndex) || // Search by name
        _.startsWith(procedure.id, newValueIndex) // Search by code
    );

    this.setState({
      procedureOptions: procedureOptions,
      procedureValue: newValue
    });
  }

  renderProcedureField() {
    return (
      <div className="ds-l-col ds-l-col--12 ds-l-md-col--9 c-search">
        <Autocomplete
          items={this.state.procedureOptions}
          label="Select from the procedures below:"
          onChange={this.handleAutocompleteChange}
        >
          <TextField
            label={
              <strong className="ds-u-font-size--h4">
                Procedure name or code
              </strong>
            }
            fieldClassName="ds-u-font-size--h3 c-input--search"
            hint={
              <span className="ds-u-color--gray">
                Enter the name of the procedure (i.e. Ultrasound) or the
                procedure&rsquo;s code.
              </span>
            }
            name="procedure"
            onChange={this.handleProcedureFieldChange}
            value={this.state.procedureValue}
          />
        </Autocomplete>
      </div>
    );
  }

  render() {
    return (
      <div className="ds-l-row">
        {this.renderProcedureField()}
        <div className="ds-l-col ds-l-col--12 ds-u-padding-top--2">
          <Button
            disabled={!this.state.selectedProcedureSlug}
            onClick={this.handleCompareClick}
            variation="primary"
          >
            Compare prices
          </Button>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  procedures: PropTypes.array
};

export default Search;
