// @flow
import React, { Component } from 'react'
import dedent from 'dedent'
import { Page } from 'catalog'

import Input from '../../../../lib/components/input'
import IconInput from '../../../../lib/components/icon-input'
import InputField from '../../../../lib/components/input-field'
import Select from '../../../../lib/components/select'
import Checkbox from '../../../../lib/components/checkbox'
import CheckboxGroup from '../../../../lib/components/checkbox-group'
import SegmentedControl from '../../../../lib/components/segmented-control'
import RadioButton from '../../../../lib/components/radio-button'
import RadioGroup from '../../../../lib/components/radio-group'
import SelectablePill from '../../../../lib/components/selectable-pill'
import SelectablePillGroup from '../../../../lib/components/selectable-pill-group'
import Textarea from '../../../../lib/components/textarea'
import ReactCodeSpecimen from '../../../components/ReactCodeSpecimen'

type Props = {}

type State = {
  input: string,
  error: string,
  iconInput: string,
  checkbox: boolean,
  inputField: string,
  select: string,
  checkboxGroup: Array<string>,
  radio: boolean,
  radioGroup: string,
  segmentedControl: string,
  selectablePill: boolean,
  selectablePillGroup: Array<string>,
  textarea: string,
}

export default class FormDocumentation extends Component<Props, State> {
  handleChange: ({ name: string, value: string }) => void
  handleArrayChange: ({ name: string, values: Array<string> }) => void
  handleToggle: ({ name: string, value: boolean }) => void

  constructor (props: Object) {
    super(props)

    this.state = {
      input: '',
      error: 'Invalid input',
      iconInput: '',
      checkbox: false,
      inputField: '',
      select: '',
      checkboxGroup: [],
      radio: false,
      radioGroup: '',
      segmentedControl: '',
      selectablePill: false,
      selectablePillGroup: [],
      textarea: ''
    }
  }

  handleChange = ({ name, value }: { name: string, value: string }) => {
    this.setState({
      [name]: value
    })
  }

  handleArrayChange = ({
    name,
    values
  }: {
    name: string,
    values: Array<string>
  }) => {
    this.setState({
      [name]: values
    })
  }

  handleToggle = ({ name, checked }: { name: string, checked: boolean }) => {
    this.setState({
      [name]: checked
    })
  }

  render () {
    const {
      input,
      error,
      iconInput,
      checkbox,
      inputField,
      select,
      checkboxGroup,
      radio,
      radioGroup,
      segmentedControl,
      selectablePill,
      selectablePillGroup,
      textarea
    } = this.state

    return (
      <Page>
        <h3>Input</h3>
        <p>Use the basic input for short, free form text.</p>
        <ReactCodeSpecimen
          code={dedent`
            <Input
              onChange={this.handleChange}
              id='1'
              name='input'
              placeholder='Example input'
              value={value}
            />
          `}
        >
          <Input
            onChange={this.handleChange}
            id='input'
            name='input'
            placeholder='Example input'
            value={input}
          />
        </ReactCodeSpecimen>
        <h3>Input with error</h3>
        <p>
          When an input&#39;s value is invalid, you can provide a message to
          help guide the user to correcting the mistake
        </p>
        <ReactCodeSpecimen
          code={dedent`
            <Input
              onChange={this.handleChange}
              id='errored-input'
              name='input'
              placeholder='Example input'
              value={value}
              error='Enter a valid value'
            />
          `}
        >
          <Input
            onChange={this.handleChange}
            id='errored-input'
            name='error'
            value={error}
            error='Enter a valid value'
          />
        </ReactCodeSpecimen>
        <h3>Clearable Input</h3>
        <p>When the user may frequently be clearing the value of an input, you can make this easy for them by including an `onClear` function</p>
        <ReactCodeSpecimen
          code={dedent`
            <Input
              onChange={this.handleChange}
              id='1'
              name='input'
              placeholder='Example input'
              value={value}
              onClear={this.handleClear}
            />
          `}
        >
          <Input
            onChange={this.handleChange}
            id='input'
            name='input'
            placeholder='Example input'
            value={input}
            onClear={this.handleChange}
          />
        </ReactCodeSpecimen>
        <h3>Icon Input</h3>
        <p>
          Use an icon input where it may be beneficial to the user to give them
          a visual cue as to what the input&#39;s value should be
        </p>
        <ReactCodeSpecimen
          code={dedent`
            <IconInput
              id="iconInput"
              name="iconInput"
              iconName="email"
              placeholder="e.g., nu@dj.co"
              onChange={this.handleChange}
              value={iconInput}
            />`}
        >
          <IconInput
            id='iconInput'
            name='iconInput'
            iconName='email'
            placeholder='e.g., nu@dj.co'
            onChange={this.handleChange}
            value={iconInput}
          />
        </ReactCodeSpecimen>
        <h3>Textarea</h3>
        <p>For longer, text based input, use a `Textarea` component as opposed to an Input.</p>
        <ReactCodeSpecimen
          code={dedent`
            <Textarea
              id='textarea'
              name='textarea'
              onChange={this.handleChange}
              placeholder='Example textarea'
              value={value}
            />
          `}
        >
          <Textarea
            id='textarea'
            name='textarea'
            onChange={this.handleChange}
            placeholder='Example textarea'
            value={textarea}
          />
        </ReactCodeSpecimen>
        <h3>Textarea with autosizing</h3>
        <p>In cases where its hard to predict the length of the content, the textarea can be made to resize itself, using <a href='https://github.com/andreypopp/react-textarea-autosize'>react-textarea-autosize</a>.</p>
        <ReactCodeSpecimen
          code={dedent`
            <Textarea
              id='textarea'
              name='textarea'
              onChange={this.handleChange}
              placeholder='Example textarea'
              value={value}
              autosize
            />
          `}
        >
          <Textarea
            id='textarea'
            name='textarea'
            onChange={this.handleChange}
            placeholder='Example textarea'
            value={textarea}
            autosize
          />
        </ReactCodeSpecimen>
        <h3>Checkbox</h3>
        <p>
          A checkbox should be used to present a choice to the user, where only
          a binary yes or no response is appropriate.
        </p>
        <ReactCodeSpecimen
          code={dedent`
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleChange}
              label='Subscribe'
              name='subscription'
              value='nudj-newsletter'
              id='subscription'
            />
          `}
        >
          <Checkbox
            checked={checkbox}
            label='Subscribe'
            onChange={this.handleToggle}
            name='checkbox'
            value='checkbox'
            id='checkbox'
          />
        </ReactCodeSpecimen>
        <h3>Select</h3>
        <p>
          Use a select when a user needs to choose from a list of pre-defined
          options. In a lot of cases, there will be a better way of presenting
          the options to the user, such as a a group of radio buttons, so use
          this as a last resort when no other input type makes sense.
        </p>
        <ReactCodeSpecimen
          code={dedent`
            <Select
              id="select"
              name="select"
              value={select}
              onChange={this.handleChange}
            >
              <option value="javascript">JavaScript 💫</option>
              <option value="ruby">Ruby 💎</option>
              <option value="go">Go 🏃</option>
            </Select>
          `}
        >
          <Select
            id='select'
            name='select'
            value={select}
            onChange={this.handleChange}
          >
            <option value='javascript'>JavaScript 💫</option>
            <option value='ruby'>Ruby 💎</option>
            <option value='go'>Go 🏃</option>
          </Select>
        </ReactCodeSpecimen>
        <h3>Checkbox Group</h3>
        <p>
          Use the checkbox group component where you have a set of related
          binary options, such as a facetted search.
        </p>
        <ReactCodeSpecimen
          code={dedent`
            <CheckboxGroup
              name='checkboxGroup'
              onChange={this.handleArrayChange}
              values={checkboxGroup}
            >
              {Checkbox => (
                <div>
                  {checkbox({ id: 'checkbox-1', key: 'checkbox-1', value: '1', label: 'One' })}
                  {checkbox({ id: 'checkbox-2', key: 'checkbox-2', value: '2', label: 'Two' })}
                </div>
              )}
            </CheckboxGroup>
          `}
        >
          <CheckboxGroup
            name='checkboxGroup'
            onChange={this.handleArrayChange}
            values={checkboxGroup}
          >
            {checkbox => (
              <div>
                {checkbox({ id: 'checkbox-1', key: 'checkbox-1', value: '1', label: 'One' })}
                {checkbox({ id: 'checkbox-2', key: 'checkbox-2', value: '2', label: 'Two' })}
                {checkbox({ id: 'checkbox-3', key: 'checkbox-3', value: '3', label: 'Three' })}
              </div>
            )}
          </CheckboxGroup>
        </ReactCodeSpecimen>
        <h3>Radio Button</h3>
        <p>
          Using a radio button used on its own is ill advised, as there are
          little to no scenarios where it is an appropriate choice for an
          interface. Use this component only where you need different control to
          that a the RadioGroup provides you. Otherwise, refer to
          the RadioGroup&#39;s documentation
        </p>
        <ReactCodeSpecimen
          code={dedent`
            <RadioButton
              checked={this.state.checked}
              onChange={this.handleChange}
              label='Subscribe'
              name='subscription'
              value='nudj-newsletter'
              id='subscription'
            />
          `}
        >
          <RadioButton
            checked={radio}
            label='Subscribe'
            onChange={this.handleToggle}
            name='radio'
            value='radio'
            id='radio'
          />
        </ReactCodeSpecimen>
        <h3>Radio Group</h3>
        <p>
          Use a RadioGroup where the user needs to choose one
          option from many.
        </p>
        <ReactCodeSpecimen
          code={dedent`
            <RadioGroup
              name='RadioGroup'
              onChange={this.handleChange}
              value={radioGroup}
            >
              {radio => (
                <div>
                  {radio({ id: 'radio-1', key: 'radio-1', value: '1', label: 'One' })}
                  {radio({ id: 'radio-2', key: 'radio-2', value: '2', label: 'Two' })}
                </div>
              )}
            </RadioGroup>
          `}
        >
          <RadioGroup
            name='radioGroup'
            onChange={this.handleChange}
            value={radioGroup}
          >
            {radio => (
              <div>
                {radio({ id: 'radio-1', key: 'radio-1', value: '1', label: 'One' })}
                {radio({ id: 'radio-2', key: 'radio-2', value: '2', label: 'Two' })}
              </div>
            )}
          </RadioGroup>
        </ReactCodeSpecimen>
        <h3>Segmented Control</h3>
        <p>Similar to a RadioGroup, you should use a Segmented Control where the user must choose one option from many, however with the subtle difference that it must display a different view.</p>
        <ReactCodeSpecimen
          code={dedent`
            <SegmentedControl
              name='segmentedControl'
              onChange={this.handleChange}
              value={segmentedControl}
            >
              {segment => (
                <div>
                  {segment({ id: '1', key: '1', value: '1', label: 'One' })}
                  {segment({ id: '2', key: '2', value: '2', label: 'Two' })}
                  {segment({ id: '3', key: '3', value: '3', label: 'Three' })}
                </div>
              )}
            </SegmentedControl>
          `}
        >
          <SegmentedControl
            name='segmentedControl'
            onChange={this.handleChange}
            value={segmentedControl}
          >
            {segment => (
              <div>
                {segment({ id: '1', key: '1', value: '1', label: 'One' })}
                {segment({ id: '2', key: '2', value: '2', label: 'Two' })}
                {segment({ id: '3', key: '3', value: '3', label: 'Three' })}
              </div>
            )}
          </SegmentedControl>
        </ReactCodeSpecimen>
        <h3>Selectable Pill</h3>
        <p>
          Use selectable pills in situations where a checkbox would make sense, but where
          the data it relates to is displayed in a pill.
        </p>
        <ReactCodeSpecimen
          code={dedent`
            <SelectablePill
              checked={selectablePill}
              label='Frontend Engineer'
              onChange={this.handleToggle}
              name='selectablePill'
              value='selectablePill'
              id='selectablePill'
            />
          `}
        >
          <SelectablePill
            checked={selectablePill}
            label='Frontend Engineer'
            onChange={this.handleToggle}
            name='selectablePill'
            value='selectablePill'
            id='selectablePill'
          />
        </ReactCodeSpecimen>
        <h3>Selectable Pill Group</h3>
        <p>
          Use the Selectable Pill Group component where you have a set of related
          binary options, which should be displayed as pills (per the SelectablePill documentation),
          such as a tag-based facetted search.
        </p>
        <ReactCodeSpecimen
          code={dedent`
            <SelectablePillGroup
              name='selectablePillGroup'
              onChange={this.handleArrayChange}
              values={selectablePillGroup}
            >
              {pill => [
                pill({ id: 'pill-1', key: 'pill-1', value: '1', label: 'One' }),
                pill({ id: 'pill-2', key: 'pill-2', value: '2', label: 'Two' }),
              ]}
            </SelectablePillGroup>
          `}
        >
          <SelectablePillGroup
            name='selectablePillGroup'
            onChange={this.handleArrayChange}
            values={selectablePillGroup}
          >
            {pill => [
              pill({ id: 'pill-1', key: 'pill-1', value: '1', label: 'One' }),
              pill({ id: 'pill-2', key: 'pill-2', value: '2', label: 'Two' }),
              pill({ id: 'pill-3', key: 'pill-3', value: '3', label: 'Three' }),
              pill({ id: 'pill-4', key: 'pill-4', value: '4', label: 'Four' }),
              pill({ id: 'pill-5', key: 'pill-5', value: '5', label: 'Five' }),
              pill({ id: 'pill-6', key: 'pill-6', value: '6', label: 'Six' }),
              pill({ id: 'pill-7', key: 'pill-7', value: '7', label: 'Seven' }),
              pill({ id: 'pill-8', key: 'pill-8', value: '8', label: 'Eight' }),
              pill({ id: 'pill-9', key: 'pill-9', value: '9', label: 'Nine' }),
              pill({ id: 'pill-10', key: 'pill-10', value: '10', label: 'Ten' }),
              pill({ id: 'pill-11', key: 'pill-11', value: '11', label: 'Eleven' }),
              pill({ id: 'pill-12', key: 'pill-12', value: '12', label: 'Twelve' }),
              pill({ id: 'pill-13', key: 'pill-13', value: '13', label: 'Thirteen' }),
              pill({ id: 'pill-14', key: 'pill-14', value: '14', label: 'Fourteen' }),
              pill({ id: 'pill-15', key: 'pill-15', value: '15', label: 'Fifteen' }),
              pill({ id: 'pill-16', key: 'pill-16', value: '16', label: 'Sixteen' })
            ]}
          </SelectablePillGroup>
        </ReactCodeSpecimen>
        <h3>Input field</h3>
        <p>
          Add context to inputs by wrapping them in an input field component.
        </p>
        <ReactCodeSpecimen
          code={dedent`
            <InputField
              htmlFor='inputField'
              label='Name'
              required
              description='What your parents called you'
            >
              <Input
                onChange={this.handleChange}
                id='inputField'
                name='inputField'
                value={inputField}
                required
              />
            </InputField>
          `}
        >
          <InputField
            htmlFor='inputField'
            label='Name'
            required
            description='What your parents called you'
          >
            <Input
              onChange={this.handleChange}
              id='inputField'
              name='inputField'
              value={inputField}
              required
            />
          </InputField>
        </ReactCodeSpecimen>
      </Page>
    )
  }
}
