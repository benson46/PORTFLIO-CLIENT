// import { SkillItem } from './skil'

export const SkillCategory = ({ title, skills = [], onAdd }) => {
  return (
    <div className="bg-gray-700 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">{title}</h3>
        <button
          onClick={onAdd}
          className="text-xs bg-gray-600 hover:bg-gray-500 px-2 py-1 rounded"
        >
          + Add
        </button>
      </div>
      <div className="space-y-2">
        {skills.length > 0 ? (
          skills.map(skill => (
            <SkillItem key={skill.id} skill={skill} />
          ))
        ) : (
          <p className="text-gray-400 text-sm">No skills added yet</p>
        )}
      </div>
    </div>
  )
}