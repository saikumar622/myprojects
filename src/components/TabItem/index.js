import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails
  const changeTabId = () => {
    clickTabItem(tabId)
  }
  const btn = isActive ? 'btn' : ''
  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${btn}`} onClick={changeTabId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
