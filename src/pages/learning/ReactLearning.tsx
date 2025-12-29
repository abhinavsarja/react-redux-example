import React, { useState } from 'react'
import '../../styles/LearningPage.scss'

interface Concept {
  id: string
  title: string
  description: string
  code?: string
  resources?: string[]
}

const ReactLearningPage: React.FC = () => {
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null)

  const concepts: Concept[] = [
    {
      id: '1',
      title: 'React Hooks - useState',
      description: 'The useState hook allows you to add state to functional components.',
      code: `const [count, setCount] = useState(0);
      
return (
  <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);`,
      resources: [
        'https://react.dev/reference/react/useState',
        'Hook State Documentation',
      ],
    },
    {
      id: '2',
      title: 'React Hooks - useEffect',
      description: 'The useEffect hook lets you perform side effects in functional components.',
      code: `useEffect(() => {
  // Side effect code here
  console.log('Component mounted or dependencies changed');
  
  return () => {
    // Cleanup code
    console.log('Cleanup on unmount');
  };
}, [dependencies]);`,
      resources: [
        'https://react.dev/reference/react/useEffect',
        'Effect Hook Documentation',
      ],
    },
    {
      id: '3',
      title: 'Props and Component Composition',
      description: 'Props allow you to pass data from parent to child components.',
      code: `interface ButtonProps {
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);`,
      resources: [
        'https://react.dev/learn/passing-props-to-a-component',
        'Props Documentation',
      ],
    },
    {
      id: '4',
      title: 'Conditional Rendering',
      description: 'Render different content based on conditions.',
      code: `const Message: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => (
  <>
    {isLoggedIn ? (
      <p>Welcome back!</p>
    ) : (
      <p>Please log in</p>
    )}
  </>
);`,
      resources: [
        'https://react.dev/learn/conditional-rendering',
        'Conditional Rendering Guide',
      ],
    },
    {
      id: '5',
      title: 'Lists and Keys',
      description: 'Rendering lists efficiently with unique keys.',
      code: `const ItemList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);`,
      resources: [
        'https://react.dev/learn/rendering-lists',
        'Lists and Keys Guide',
      ],
    },
  ]

  const toggleConcept = (id: string) => {
    setExpandedConcept(expandedConcept === id ? null : id)
  }

  return (
    <div className="learning-page">
      <header className="learning-header">
        <div className="container">
          <h1>React Learning Resources</h1>
          <p className="subtitle">Personal notes and quick reference for React concepts</p>
          <div className="dev-only-badge">🔒 Development Only - Not Deployed</div>
        </div>
      </header>

      <section className="learning-content">
        <div className="container">
          <div className="concepts-list">
            {concepts.map((concept) => (
              <div
                key={concept.id}
                className={`concept-card ${expandedConcept === concept.id ? 'expanded' : ''}`}
              >
                <div
                  className="concept-header"
                  onClick={() => toggleConcept(concept.id)}
                >
                  <h3>{concept.title}</h3>
                  <span className="toggle-icon">
                    {expandedConcept === concept.id ? '▼' : '▶'}
                  </span>
                </div>

                <p className="concept-description">{concept.description}</p>

                {expandedConcept === concept.id && (
                  <div className="concept-details">
                    {concept.code && (
                      <div className="code-block">
                        <h4>Example Code:</h4>
                        <pre>
                          <code>{concept.code}</code>
                        </pre>
                      </div>
                    )}

                    {concept.resources && concept.resources.length > 0 && (
                      <div className="resources">
                        <h4>Resources:</h4>
                        <ul>
                          {concept.resources.map((resource, idx) => (
                            <li key={idx}>{resource}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="learning-notes">
            <h2>Personal Learning Notes</h2>
            <div className="notes-section">
              <h3>Key Takeaways</h3>
              <ul>
                <li>React is a JavaScript library for building user interfaces with components</li>
                <li>Functional components with hooks are the modern way to write React</li>
                <li>State management is crucial for handling dynamic data</li>
                <li>Always use unique keys when rendering lists</li>
                <li>Props enable component reusability and composition</li>
              </ul>
            </div>

            <div className="notes-section">
              <h3>Common Mistakes to Avoid</h3>
              <ul>
                <li>Mutating state directly - always use setState or hooks</li>
                <li>Missing dependency arrays in useEffect</li>
                <li>Using array index as key in lists (can cause bugs)</li>
                <li>Not memoizing expensive computations</li>
                <li>Props drilling too many levels deep</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReactLearningPage
