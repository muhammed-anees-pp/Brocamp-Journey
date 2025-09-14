// export default function ProfileCard({name,email}) {
//   return (
//     <article className="profile__card">
//       <h2>{name}</h2>
//       <p>{`Email: ${email}`}</p>
//     </article>
//   )
// }


export default function ProfileCard({ name, email }) {
  return (
    <div className="profile__card">
      <h2>{name}</h2>
      <p>{`Email: ${email}`}</p>
    </div>
  );
}
