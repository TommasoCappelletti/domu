function Notification({ item }) {
  const notificationsNumber = item.filter(
    (post) => post.readed === false
  ).length;

  if (!notificationsNumber) return;

  return (
    <span className=" bg-red-500 rounded-full  p-1 w-5 h-5 text-sm flex justify-center items-center ">
      {notificationsNumber}
    </span>
  );
}

export default Notification;
