import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeTabClassName = isActive ? 'tab-btn active' : 'tab-btn'

  const onClickAppItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onClickAppItem}
        className={activeTabClassName}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
