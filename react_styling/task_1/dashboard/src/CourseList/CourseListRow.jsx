
function CourseListRow({ isHeader = true, textFirstCell = "", textSecondCell = null }) {
    const rowClass = isHeader ? "bg-[var(--color-table-header)]/44" : "bg-[var(--color-table-rows)]/44"
    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <tr className={rowClass}>
                    <th colSpan="2" className="pl-2 border border-gray-400">{textFirstCell}</th>
                </tr>
            )
        }
        return (
            <tr className={rowClass}>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
            </tr>
        )
    }
    return (
        <tr className={rowClass}>
            <td className="pl-2 border border-gray-400">{textFirstCell}</td>
            <td className="pl-2 border border-gray-400">{textSecondCell}</td>
        </tr>
    )
}
export default CourseListRow