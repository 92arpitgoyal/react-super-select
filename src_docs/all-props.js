var multiple = require('./properties/multiple'),
    searchable = require('./properties/searchable'),
    tags = require('./properties/tags'),
    clearable = require('./properties/clearable'),
    clearSearchLabelString = require('./properties/clearSearchLabelString'),
    clearSearchOnSelection = require('./properties/clearSearchonSelection'),
    clearSelectionLabelString = require('./properties/clearSelectionLabelString'),
    controlId= require('./properties/controlId'),
    customClass = require('./properties/customClass'),
    customGroupHeadingClass = require('./properties/customGroupHeadingClass'),
    customSearchIconClass = require('./properties/customSearchIconClass'),
    customLoaderClass = require('./properties/customLoaderClass'),
    customTagClass = require('./properties/customTagClass'),
    deselectOnSelectedOptionClick = require('./properties/deselectOnSelectedOptionClick'),
    disabled = require('./properties/disabled'),
    onChange = require('./properties/onChange'),
    onCloseDropdown = require('./properties/onCloseDropdown'),
    onOpenDropdown = require('./properties/onOpenDropdown'),
    openOnMount = require('./properties/openOnMount'),
    focusOnMount = require('./properties/focusOnMount'),
    forceDefaultBrowserScrolling = require('./properties/forceDefaultBrowserScrolling'),
    keepOpenOnSelection = require('./properties/keepOpenOnSelection'),
    ajaxDataFetch = require('./properties/ajaxDataFetch'),
    dataSource = require('./properties/dataSource'),
    initialValue = require('./properties/initialValue'),
    optionLabelKey = require('./properties/optionLabelKey'),
    optionValueKey = require('./properties/optionValueKey'),
    pageDataFetch = require('./properties/pageDataFetch'),
    hasMorePages = require('./properties/hasMorePages'),
    groupBy = require('./properties/groupBy'),
    customGroupHeadingTemplateFunction = require('./properties/customGroupHeadingTemplateFunction'),
    customFilterFunction = require('./properties/customFilterFunction'),
    customOptionTemplateFunction = require('./properties/customOptionTemplateFunction'),
    customSelectedValueTemplateFunction = require('./properties/customSelectedValueTemplateFunction'),
    ajaxErrorString = require('./properties/ajaxErrorString'),
    noResultsString = require('./properties/noResultsString'),
    placeholder = require('./properties/placeholder'),
    searchPlaceholder = require('./properties/searchPlaceholder'),
    tagRemoveLabelString = require('./properties/tagRemoveLabelString');

var allProps = [
  multiple,
  searchable,
  tags,
  clearable,
  controlId,
  deselectOnSelectedOptionClick,
  clearSearchLabelString,
  clearSearchOnSelection,
  clearSelectionLabelString,
  customClass,
  customGroupHeadingClass,
  customSearchIconClass,
  customLoaderClass,
  customTagClass,
  disabled,
  onChange,
  onCloseDropdown,
  onOpenDropdown,
  ajaxDataFetch,
  dataSource,
  initialValue,
  keepOpenOnSelection,
  openOnMount,
  focusOnMount,
  forceDefaultBrowserScrolling,
  optionLabelKey,
  optionValueKey,
  pageDataFetch,
  hasMorePages,
  groupBy,
  customGroupHeadingTemplateFunction,
  customFilterFunction,
  customOptionTemplateFunction,
  customSelectedValueTemplateFunction,
  ajaxErrorString,
  noResultsString,
  placeholder,
  searchPlaceholder,
  tagRemoveLabelString
];

module.exports = allProps;
