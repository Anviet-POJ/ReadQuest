/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Book, Achievement } from "./types";

export const INITIAL_BOOKS: Book[] = [
  {
    id: "1",
    title: "Dế Mèn Phiêu Lưu Ký",
    author: "Tô Hoài",
    description: "Tác phẩm là bản anh hùng ca về tinh thần độc lập, tự cường của tuổi trẻ. Nhân vật chính là chú Dế Mèn dũng cảm nhưng ban đầu còn kiêu ngạo. Qua những chặng đường du hành đầy hiểm nguy, từ việc vô tình gây ra cái chết cho Dế Choắt đến khi trở thành người đứng đầu liên minh muôn loài, Mèn đã học được những bài học vô giá về lòng nhân ái, tình bạn chân thành và khát vọng hòa bình. Cuốn sách là viên ngọc quý của văn học thiếu nhi Việt Nam, thấm đẫm bút pháp quan sát tinh tế của nhà văn Tô Hoài.",
    coverUrl: "",
    category: "Văn học Việt Nam",
    points: 100,
    level: 1
  },
  {
    id: "2",
    title: "Harry Potter và Hòn Đá Phù Thủy",
    author: "J.K. Rowling",
    description: "Mở đầu cho hành trình huyền thoại của cậu bé phù thủy Harry Potter. Mồ côi cha mẹ từ nhỏ và phải sống trong sự hắt hủi của gia đình dì dượng Dursley, cuộc đời Harry rẽ sang trang mới khi nhận được thư nhập học từ trường Hogwarts. Tại đây, cậu cùng những người bạn Ron và Hermione khám phá ra những bí mật về thân thế của mình và bắt đầu cuộc đối đầu định mệnh với Voldemort. Tác phẩm không chỉ thu hút bởi phép thuật mà còn bởi thông điệp về sự lựa chọn: 'Chính những lựa chọn của chúng ta, chứ không phải là năng lực, mới cho thấy chúng ta thực sự là ai'.",
    coverUrl: "",
    category: "Giả tưởng",
    points: 200,
    level: 2
  },
  {
    id: "3",
    title: "Hoàng Tử Bé",
    author: "Antoine de Saint-Exupéry",
    description: "Một kiệt tác văn học mang tính triết lý sâu sắc phù hợp cho mọi lứa tuổi. Câu chuyện kể về một phi công gặp nạn trên sa mạc Sahara và cuộc hội ngộ với cậu bé đến từ tiểu tinh cầu B-612. Qua những cuộc đối thoại ngây ngô nhưng đầy suy ngẫm về bông hồng kiêu kỳ, con cáo cần được 'cảm hóa' và những kẻ kỳ lạ trên các hành tinh khác, tác phẩm gửi gắm chân lý vĩnh cửu: 'Người ta chỉ có thể nhìn thấy rõ ràng bằng trái tim; những gì cốt yếu thì mắt thường không nhìn thấy được'.",
    coverUrl: "",
    category: "Triết học/Thiếu nhi",
    points: 150,
    level: 2
  },
  {
    id: "4",
    title: "Đất Rừng Phương Nam",
    author: "Đoàn Giỏi",
    description: "Một bức tranh sinh động và hào hùng về vùng đất Tây Nam Bộ trong thời kỳ kháng chiến chống Pháp. Theo chân cậu bé An trong hành trình tìm cha, người đọc được chiêm ngưỡng vẻ đẹp trù phú của rừng tràm, vẻ hoang sơ của Cà Mau và gặp gỡ những con người Nam Bộ chất phác, hào hiệp như tía nuôi, má nuôi và chú Võ Tòng. Tác phẩm khơi dậy lòng yêu nước, niềm tự hào về truyền thống giữ nước và sự gắn bó máu thịt với thiên nhiên xứ sở.",
    coverUrl: "",
    category: "Văn học Việt Nam",
    points: 120,
    level: 1
  },
  {
    id: "5",
    title: "Không Gia Đình",
    author: "Hector Malot",
    description: "Cuộc hành trình gian nan nhưng đầy nghị lực của cậu bé Remi. Bị bắt cóc và bán cho ông cụ Vitalis - một nghệ sĩ xiếc thú, Remi đã cùng đoàn xiếc đi khắp nước Pháp, trải qua cái đói, cái rét và nỗi cô đơn tột cùng. Dưới sự dạy bảo của cụ Vitalis, Remi không chỉ học được chữ cái, cách thổi kèn mà còn học được cách giữ gìn nhân cách, lòng tự trọng và sự lương thiện trong mọi hoàn cảnh. Đây là bài ca về ý chí kiên định và tấm lòng nhân hậu của con người giữa nghịch cảnh.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 180,
    level: 2
  },
  {
    id: "6",
    title: "Đảo Giấu Vàng",
    author: "Robert Louis Stevenson",
    description: "Tác phẩm kinh điển về đề tài cướp biển, dẫn dắt người đọc vào cuộc phiêu lưu nghẹt thở của cậu bé Jim Hawkins. Sở hữu tấm bản đồ dẫn đến kho báu của Flint, Jim cùng đoàn viễn chinh lên tàu Hispaniola lênh đênh trên biển cả. Cuộc đối đầu trí tuệ với tên cướp biển lừng danh John Silver 'chân gỗ' đã tạo nên những tình tiết kịch tính, khám phá bản chất tham vọng và lòng dũng cảm của con người trước kho tiền vàng khổng lồ.",
    coverUrl: "",
    category: "Phiêu lưu",
    points: 200,
    level: 3
  },
  {
    id: "7",
    title: "Gió Lạnh Đầu Mùa",
    author: "Thạch Lam",
    description: "Tập truyện ngắn tinh tế của Thạch Lam, nổi bật nhất là truyện cùng tên kể về chị em Sơn và Lan trong một ngày đầu đông gió rét. Thấy Hiên - một cô bé nhà nghèo, co ro trong manh áo mỏng, Sơn đã nảy ra ý định tặng chiếc áo bông cũ của mình cho bạn. Tác phẩm tuy giản dị nhưng thấm đẫm tình người, dạy cho trẻ em về lòng trắc ẩn, sự chia sẻ và niềm hạnh phúc nhỏ nhoi khi mang lại hơi ấm cho người khác.",
    coverUrl: "",
    category: "Văn học Việt Nam",
    points: 80,
    level: 1
  },
  {
    id: "8",
    title: "Alice Ở Xứ Sở Thần Tiên",
    author: "Lewis Carroll",
    description: "Một hành trình kỳ ảo của cô bé Alice sau khi rơi xuống hang thỏ. Tại xứ sở thần tiên, Alice gặp gỡ Thỏ Trắng, Mèo Cheshire hay biến mất, và tham dự bữa tiệc trà kỳ quặc của Thợ Mũ Điên. Tác phẩm rực rỡ sắc màu với những trò chơi ngôn ngữ, các nghịch lý logic và trí tưởng tượng không giới hạn, khuyến khích trẻ em tin vào những điều không thể và khám phá thế giới xung quanh bằng óc sáng tạo.",
    coverUrl: "",
    category: "Kỳ ảo",
    points: 160,
    level: 2
  },
  {
    id: "9",
    title: "Tâm Hồn Cao Thượng",
    author: "Edmondo De Amicis",
    description: "Dưới dạng nhật ký của cậu bé Enrico, cuốn sách ghi lại những câu chuyện về trường học, gia đình và xã hội tại Ý thế kỷ 19. Mỗi trang nhật ký là một bài học đạo đức nhẹ nhàng nhưng sâu sắc về lòng hiếu thảo, tình thầy trò, tình bạn và lòng yêu nước. Những 'truyện đọc hàng tháng' trong sách như 'Cậu bé tìm mẹ' đã lấy đi nước mắt của bao thế hệ độc giả, hướng con người tới những giá trị chân, thiện, mỹ.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 140,
    level: 2
  },
  {
    id: "10",
    title: "Cuộc Phiêu Lưu của Tom Sawyer",
    author: "Mark Twain",
    description: "Kể về cuộc sống và những trò nghịch ngợm của Tom Sawyer bên dòng sông Mississippi. Tom cùng người bạn Huckleberry Finn đã trải qua những tình huống vừa hài hước vừa nguy hiểm: từ việc lừa các bạn sơn hàng rào cho mình đến việc chứng kiến một vụ án mạng trong nghĩa địa. Tác phẩm là sự tôn vinh tuổi thơ nổi loạn, khát khao tự do và tinh thần trượng nghĩa của những cậu bé chưa bị ràng buộc bởi các quy tắc xã hội nghiêm ngặt.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 170,
    level: 3
  },
  {
    id: "11",
    title: "Những Ngày Thơ Ấu",
    author: "Nguyên Hồng",
    description: "Tác phẩm là những trang hồi ký đẫm nước mắt về tuổi thơ cay đắng của chính nhà văn. Những ngày tháng sống trong sự ghẻ lạnh của gia đình họ nội, nỗi khát khao tình mẫu tử cháy bỏng của cậu bé Hồng đã chạm đến trái tim của hàng triệu độc giả. Chương 'Trong lòng mẹ' với khoảnh khắc Hồng được ôm lấy người mẹ trở về là một trong những đoạn trích xúc động nhất, khẳng định sức mạnh của tình yêu thương vượt qua mọi thành kiến xã hội.",
    coverUrl: "",
    category: "Văn học Việt Nam",
    points: 130,
    level: 2
  },
  {
    id: "12",
    title: "Heidi",
    author: "Johanna Spyri",
    description: "Câu chuyện về cô bé mồ côi Heidi đầy nắng và gió trên dãy núi Alps hùng vĩ của Thụy Sĩ. Heidi đã mang lại ánh sáng và niềm hy vọng cho người ông nội cô độc, cho cậu bạn chăn dê Peter và cho cả Clara - cô bạn tật nguyền tại thành phố Frankfurt. Tác phẩm tôn vinh vẻ đẹp của thiên nhiên, lòng nhân ái và khả năng chữa lành tâm hồn thông qua sự hồn nhiên, chân thành của trẻ thơ.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 160,
    level: 1
  },
  {
    id: "13",
    title: "Lược Sử Thời Gian",
    author: "Stephen Hawking",
    description: "Một cuốn sách khoa học phổ thông nổi tiếng giải thích về nguồn gốc vũ trụ, các lỗ đen và bản chất của thời gian một cách dễ hiểu nhất có thể. Hawking dẫn dắt người đọc đi xuyên suốt quá trình hình thành của vạn vật từ vụ nổ Big Bang đến tương lai của vũ trụ.",
    coverUrl: "",
    category: "Khoa học",
    points: 250,
    level: 5
  },
  {
    id: "14",
    title: "Oliver Twist",
    author: "Charles Dickens",
    description: "Kể về cậu bé mồ côi Oliver Twist và những trải nghiệm gian khổ của cậu trong các nhà tế bần và thế giới ngầm tội phạm ở London thế kỷ 19. Cuộc đấu tranh của Oliver để bảo vệ sự lương thiện giữa cái ác đã phơi bày những thực trạng xã hội bất công thời bấy giờ.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 190,
    level: 3
  },
  {
    id: "15",
    title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
    author: "Nguyễn Nhật Ánh",
    description: "Một tập truyện dài mang âm hưởng hoài niệm về tuổi thơ ở một làng quê nghèo. Câu chuyện xoay quanh mối quan hệ giữa hai anh em Thiều và Tường, những tình cảm đầu đời trong sáng, những nỗi buồn của người lớn và vẻ đẹp mộc mạc của quê hương Việt Nam.",
    coverUrl: "",
    category: "Văn học Việt Nam",
    points: 140,
    level: 1
  },
  {
    id: "16",
    title: "Tuổi Thơ Dữ Dội",
    author: "Phùng Quán",
    description: "Cuốn tiểu thuyết sử thi về những anh hùng nhỏ tuổi của Đội thiếu niên trinh sát trung đoàn Trần Cao Vân. Trong khói lửa chiến tranh, những cậu bé như Lượm, Mừng, Quỳnh sơn ca... đã chiến đấu và hy sinh bằng lòng yêu nước nồng nàn và lòng dũng cảm phi thường. Tác phẩm là khúc tráng ca về một thế hệ thiếu nhi Việt Nam anh hùng, để lại niềm xúc động sâu sắc và lòng tự hào dân tộc.",
    coverUrl: "",
    category: "Văn học Việt Nam",
    points: 250,
    level: 3
  },
  {
    id: "17",
    title: "Kính Vạn Hoa",
    author: "Nguyễn Nhật Ánh",
    description: "Bộ truyện gắn liền với tuổi thơ của nhiều thế hệ, xoay quanh bộ ba Quý rôm, Nhỏ Hạnh và Tiểu Long. Những câu chuyện đời thường, những chuyến về quê đầy thú vị cùng các tình huống dở khóc dở cười đã vẽ nên một bức tranh sinh động về tình bạn, sự tò mò và khát khao khám phá thế giới của tuổi học trò. Tác phẩm là sự kết hợp khéo léo giữa yếu tố hài hước và những bài học cuộc sống nhẹ nhàng.",
    coverUrl: "",
    category: "Văn học Việt Nam",
    points: 150,
    level: 2
  },
  {
    id: "18",
    title: "Charlotte và Wilbur",
    author: "E.B. White",
    description: "Câu chuyện cảm động về tình bạn cao đẹp giữa chú lợn Wilbur và cô nhện thông minh Charlotte. Để cứu Wilbur khỏi lưỡi dao của đồ tể, Charlotte đã dệt nên những dòng chữ kỳ diệu trên mạng nhện của mình, biến Wilbur thành một 'chú lợn đặc biệt'. Tác phẩm là bài học quý giá về lòng trung thành, sự hy sinh và ý nghĩa của cuộc sống, nhắc nhở chúng ta rằng tình bạn chân thành có thể tạo nên những phép màu.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 160,
    level: 1
  },
  {
    id: "19",
    title: "Matilda",
    author: "Roald Dahl",
    description: "Matilda là một cô bé cực kỳ thông minh, biết đọc từ lúc 3 tuổi và có khả năng di chuyển đồ vật bằng ý nghĩ. Tuy nhiên, em lại phải sống trong một gia đình hắt hủi và một ngôi trường có bà hiệu trưởng Trunchbull độc ác. Bằng trí tuệ và sự dũng cảm của mình, Matilda đã vùng lên tự cứu mình và giúp đỡ cô giáo Honey tốt bụng. Tác phẩm tôn vinh sức mạnh của tri thức và sự công bằng.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 180,
    level: 2
  },
  {
    id: "20",
    title: "Peter Pan",
    author: "J.M. Barrie",
    description: "Kể về 'cậu bé không bao giờ lớn' Peter Pan và những chuyến phiêu lưu kỳ thú tại vùng đất Neverland. Cùng với cô bé Wendy và chú chó Nana, Peter đã đối đầu với thuyền trưởng Hook xảo quyệt. Tác phẩm là biểu tượng cho tinh thần tự do, trí tưởng tượng bay bổng của trẻ thơ và niềm khao khát mãi mãi được giữ gìn sự hồn nhiên trong tâm hồn.",
    coverUrl: "",
    category: "Kỳ ảo",
    points: 170,
    level: 2
  },
  {
    id: "21",
    title: "Gió Qua Rặng Liễu",
    author: "Kenneth Grahame",
    description: "Một cuốn sách kinh điển về thiên nhiên và tình bạn giữa bốn nhân vật: Chuột Chũi, Chuột Cống, Bác Lửng và bác Cóc. Những chuyến phiêu lưu bên dòng sông râm mát và những rắc rối nực cười của bác Cóc đã tạo nên một thế giới yên bình, thơ mộng. Tác phẩm ca ngợi vẻ đẹp của sự giản dị, lòng vị tha và tình cảm gắn bó giữa những người bạn thân thiết.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 150,
    level: 1
  },
  {
    id: "22",
    title: "Mít Đặc và Các Bạn",
    author: "Nikolai Nosov",
    description: "Thành phố Hoa rực rỡ sắc màu là nơi sinh sống của những người tí hon, nổi bật là chú bé Mít Đặc ham học hỏi nhưng hay gây rắc rối và cậu bạn Biết Tuốt thông minh. Những chuyến du hành bằng khinh khí cầu hay bằng ô tô chạy nước ngọt của họ đã mở ra một thế giới đầy bất ngờ và tiếng cười. Tác phẩm khơi gợi lòng ham hiểu biết và trí tưởng tượng phong phú cho trẻ nhỏ.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 130,
    level: 1
  },
  {
    id: "23",
    title: "Pippi Tất Dài",
    author: "Astrid Lindgren",
    description: "Pippi là một cô bé kỳ lạ với hai bím tóc đỏ hoe cứng đờ, đôi tất dài khác màu và sức mạnh phi thường có thể nhấc bổng một con ngựa. Sống một mình trong biệt thự Bát Nháo cùng chú khỉ và con ngựa, Pippi luôn tràn đầy năng lượng và những ý tưởng phá cách. Tác phẩm khuyến khích trẻ em tự tin vào bản thân, dám khác biệt và luôn lạc quan trong cuộc sống.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 160,
    level: 2
  },
  {
    id: "24",
    title: "Robinson Crusoe",
    author: "Daniel Defoe",
    description: "Bản anh hùng ca về ý chí kiên cường và nghị lực sinh tồn của con người trước thiên nhiên hoang dã. Bị dạt vào hoang đảo sau một vụ đắm tàu, Robinson đã một mình gây dựng cuộc sống từ con số không: từ việc săn bắn, trồng trọt đến việc thuần hóa thú hoang và kết bạn với anh chàng Thứ Sáu. Cuốn sách là bài học vô giá về sự lao động sáng tạo và tinh thần không bao giờ bỏ cuộc.",
    coverUrl: "",
    category: "Phiêu lưu",
    points: 220,
    level: 3
  },
  {
    id: "25",
    title: "Bác Sĩ Ai-bô-lít",
    author: "Kornei Chukovsky",
    description: "Câu chuyện về vị bác sĩ nhân hậu chuyên chữa bệnh cho các con vật. Dù đường xá xa xôi, hiểm trở đến đâu, chỉ cần nghe thấy tiếng gọi cầu cứu từ Phi Phi, bác sĩ Ai-bô-lít luôn sẵn lòng lên đường. Tác phẩm dạy cho trẻ em lòng yêu thương loài vật, sự tận tụy và tinh thần trách nhiệm với công việc của mình.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 120,
    level: 1
  },
  {
    id: "26",
    title: "Totto-chan: Cô Bé Bên Cửa Sổ",
    author: "Kuroyanagi Tetsuko",
    description: "Cuốn sách kể về tuổi thơ của chính tác giả tại trường Tomoe - một ngôi trường với những lớp học bằng toa tàu cũ và một thầy hiệu trưởng tuyệt vời luôn thấu hiểu học trò. Totto-chan là một cô bé 'khác biệt' nhưng đã được phát triển tự nhiên nhờ phương pháp giáo dục hiện đại và đầy lòng nhân ái. Tác phẩm là lời khẳng định rằng mỗi trẻ em đều là một tài năng riêng biệt nếu được nuôi dưỡng đúng cách.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 150,
    level: 1
  },
  {
    id: "27",
    title: "Những Cuộc Phiêu Lưu Của Huckleberry Finn",
    author: "Mark Twain",
    description: "Hành trình trốn chạy của Huck Finn và người nô lệ da đen Jim trên một chiếc bè xuôi dòng sông Mississippi. Trên con đường tìm kiếm tự do, Huck đã đấu tranh nội tâm dữ dội trước những định kiến xã hội để bảo vệ người bạn của mình. Cuốn sách là một kiệt tác phê phán sự bất công và ca ngợi tình người, sự trung thực và tự do chân chính.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 210,
    level: 3
  },
  {
    id: "28",
    title: "Phù Thủy Xứ Oz",
    author: "L. Frank Baum",
    description: "Theo chân cô bé Dorothy bị một cơn lốc xoáy cuốn từ Kansas đến vùng đất Oz kỳ bí. Trên đường tìm phù thủy Oz để về nhà, em đã kết bạn với Bù Nhìn muốn có bộ não, Thiếc muốn có trái tim và Sư Tử muốn có lòng dũng cảm. Tác phẩm gửi gắm thông điệp rằng những thứ chúng ta tìm kiếm thực ra vốn luôn hiện hữu bên trong mỗi con người.",
    coverUrl: "",
    category: "Kỳ ảo",
    points: 180,
    level: 2
  },
  {
    id: "29",
    title: "Đồi Thỏ",
    author: "Richard Adams",
    description: "Một thiên sử thi hiện đại về một nhóm thỏ rời bỏ hang cũ để tìm vùng đất mới trước thảm họa diệt vong do con người gây ra. Dưới sự dẫn dắt của Hazel và những tiên đoán của Thứ Năm, bầy thỏ đã vượt qua muôn vàn thử thách khắc nghiệt để xây dựng một cộng đồng tự do. Tác phẩm là bài ca về sự dũng cảm, tinh thần đoàn kết và khát vọng sống mãnh liệt.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 240,
    level: 3
  },
  {
    id: "30",
    title: "Charlie và Nhà Máy Sô-cô-la",
    author: "Roald Dahl",
    description: "Charlie Bucket là một cậu bé nghèo may mắn nhận được chiếc vé vàng cuối cùng để tham quan nhà máy sô-cô-la kỳ diệu của ông Willy Wonka. Tại đây, em đã chứng kiến những điều phi thường từ dòng sông sô-cô-la đến những công nhân Oompa-Loompa tí hon. Tác phẩm là phần thưởng cho lòng hiếu thảo, sự khiêm tốn và lòng nhân hậu của trẻ thơ.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 170,
    level: 2
  },
  {
    id: "31",
    title: "Hai Vạn Dặm Dưới Đáy Biển",
    author: "Jules Verne",
    description: "Cuộc hành trình kỳ thú dưới lòng đại dương cùng thuyền trưởng Nemo và con tàu ngầm Nautilus tân tiến. Tác phẩm không chỉ là một câu chuyện phiêu lưu nghẹt thở mà còn là sự dự báo thiên tài về những tiến bộ khoa học kỹ thuật trong tương lai. Người đọc sẽ được chiêm ngưỡng những kỳ quan dưới đáy biển sâu và suy ngẫm về mối quan hệ giữa con người và thiên nhiên.",
    coverUrl: "",
    category: "Khoa học Viễn tưởng",
    points: 230,
    level: 3
  },
  {
    id: "32",
    title: "Tám Mươi Ngày Vòng Quanh Thế Giới",
    author: "Jules Verne",
    description: "Phileas Fogg, một quý ông người Anh lịch lãm nhưng có lối sống cực kỳ kỷ luật, đã đánh cược một số tiền khổng lồ rằng mình có thể đi vòng quanh trái đất trong chỉ 80 ngày. Cùng với anh bạn phục vụ trung thành Passepartout, họ đã vượt qua bao gian nan từ đại dương đến những cánh rừng nhiệt đới để chứng minh sức mạnh của ý chí và sự kiên trì.",
    coverUrl: "",
    category: "Phiêu lưu",
    points: 210,
    level: 3
  },
  {
    id: "33",
    title: "Tiếng Gọi Nơi Hoang Dã",
    author: "Jack London",
    description: "Câu chuyện về chú chó Buck bị bắt cóc từ một trang trại yên bình để trở thành chó kéo xe ở vùng Alaska lạnh giá. Qua những trận đòn roi và cuộc sinh tồn khốc liệt, bản năng hoang dã của Buck dần trỗi dậy. Tác phẩm là bài ca về sức sống mãnh liệt và khát vọng tự do cháy bỏng, dẫn dắt người đọc trở về với cội nguồn thiên nhiên.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 190,
    level: 3
  },
  {
    id: "34",
    title: "Chuyện Con Mèo Dạy Hải Âu Bay",
    author: "Luis Sepúlveda",
    description: "Một câu chuyện ấm áp về chú mèo mun mập ú Zorba đã giữ lời hứa chăm sóc một quả trứng hải âu và dạy cho hải âu con cách bay. Cuốn sách gửi gắm thông điệp sâu sắc về việc chấp nhận sự khác biệt và sức mạnh của tình yêu thương không biên giới. Đây là một bài học tuyệt vời về lòng nhân ái dành cho mọi lứa tuổi.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 130,
    level: 1
  },
  {
    id: "35",
    title: "Cây Cam Ngọt Của Tôi",
    author: "José Mauro de Vasconcelos",
    description: "Zezé, một cậu bé nghèo ở Brazil với trái tim nhạy cảm và trí tưởng tượng phong phú, đã tìm thấy một người bạn đặc biệt: một cây cam ngọt nhỏ trong vườn. Qua những biến cố đau lòng và những bài học về nỗi đau, Zezé đã dần trưởng thành. Tác phẩm lấy đi nước mắt của hàng triệu độc giả bởi sự chân thành và vẻ đẹp của tình người giữa nghịch cảnh.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 160,
    level: 2
  },
  {
    id: "36",
    title: "Những Người Khốn Khổ",
    author: "Victor Hugo",
    description: "Một bản hùng ca về lòng nhân ái và sự cứu rỗi linh hồn. Câu chuyện xoay quanh Jean Valjean, một người tù khổ sai đã hoàn lương và hành trình trốn chạy sự truy đuổi khắc nghiệt của thanh tra Javert. Tác phẩm phác họa bức tranh xã hội Pháp thế kỷ 19 đầy bất công nhưng luôn rực cháy ngọn lửa của hy vọng và tình yêu thương giữa con người.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 250,
    level: 4
  },
  {
    id: "37",
    title: "Gulliver Du Ký",
    author: "Jonathan Swift",
    description: "Theo chân bác sĩ Gulliver đến những miền đất kỳ lạ như xứ sở tí hon Lilliput hay vương quốc của những người khổng lồ Brobdingnag. Qua những tình huống dở khóc dở cười, tác phẩm không chỉ là một cuốn sách phiêu lưu kỳ ảo mà còn chứa đựng những ngụ ý châm biếm sâu sắc về xã hội và bản tính con người.",
    coverUrl: "",
    category: "Kỳ ảo",
    points: 180,
    level: 2
  },
  {
    id: "38",
    title: "Nghìn Lẻ Một Đêm",
    author: "Văn học Ba Tư",
    description: "Thế giới huyền bí của phương Đông mở ra qua những câu chuyện kể của nàng Scheherazade thông minh. Từ Aladdin và cây đèn thần đến Sinbad và bảy cuộc phiêu lưu trên biển, mỗi câu chuyện là một sự kết hợp tuyệt vời giữa phép thuật, lòng dũng cảm và trí tuệ. Tác phẩm là kho tàng trí tưởng tượng bất tận của nhân loại.",
    coverUrl: "",
    category: "Cổ tích/Truyền thuyết",
    points: 200,
    level: 2
  },
  {
    id: "39",
    title: "Truyện Cổ Grimm",
    author: "Jacob & Wilhelm Grimm",
    description: "Tập hợp những câu chuyện cổ dân gian Đức nổi tiếng như Cô bé Lọ Lem, Nàng Bạch Tuyết và bảy chú lùn hay Chó sói và bảy con dê con. Những câu chuyện này không chỉ là giải trí mà còn chứa đựng những bài học đạo đức sâu sắc về sự thiện thắng ác và giá trị của lòng tốt.",
    coverUrl: "",
    category: "Cổ tích",
    points: 120,
    level: 1
  },
  {
    id: "40",
    title: "Truyện Cổ Andersen",
    author: "Hans Christian Andersen",
    description: "Những câu chuyện giàu lòng trắc ẩn và đượm buồn như Cô bé bán diêm, Chú lính chì dũng cảm hay Nàng tiên cá nhỏ. Andersen đã thổi hồn vào vạn vật, tạo nên những tác phẩm bất hủ hướng con người tới sự đồng cảm và trân trọng những giá trị tinh thần vĩnh cửu.",
    coverUrl: "",
    category: "Cổ tích",
    points: 120,
    level: 1
  },
  {
    id: "41",
    title: "Thần Thoại Hy Lạp",
    author: "Sưu tầm",
    description: "Thế giới của các vị thần trên đỉnh Olympus như Zeus, Hera, Poseidon và những anh hùng huyền thoại như Hercules hay Achilles. Những câu chuyện về sự sáng tạo thế giới, các cuộc chiến vĩ đại và những bài học về lòng kiêu hãnh đã hình thành nên nền móng cho văn hóa phương Tây.",
    coverUrl: "",
    category: "Thần thoại",
    points: 190,
    level: 2
  },
  {
    id: "42",
    title: "Những Cuộc Phiêu Lưu của Sinbad",
    author: "Văn học Ba Tư",
    description: "Bảy chuyến hành trình vượt đại dương sóng gió của thủy thủ Sinbad hào hiệp. Gặp gỡ những loài chim khổng lồ, những hòn đảo sống và những bộ lạc kỳ lạ, Sinbad đã dùng trí thông minh và lòng dũng cảm để vượt qua mọi hiểm nguy. Tác phẩm là biểu tượng cho tinh thần khám phá không mệt mỏi.",
    coverUrl: "",
    category: "Phiêu lưu",
    points: 160,
    level: 2
  },
  {
    id: "43",
    title: "Bồ Câu Không Đưa Thư",
    author: "Nguyễn Nhật Ánh",
    description: "Một câu chuyện học trò dí dỏm và đầy cảm xúc của nhà văn Nguyễn Nhật Ánh. Những lá thư làm quen bí mật, những hiểu lầm kịch tính và tình bạn trong sáng dưới mái trường đã tạo nên một kỷ niệm khó quên cho lứa tuổi mười lăm. Tác phẩm giúp người đọc trở về với những rung động đầu đời hồn nhiên.",
    coverUrl: "",
    category: "Văn học Việt Nam",
    points: 140,
    level: 1
  },
  {
    id: "44",
    title: "Vừa Nhắm Mắt Vừa Mở Cửa Sổ",
    author: "Nguyễn Ngọc Thuần",
    description: "Thế giới qua đôi mắt trong trẻo của cậu bé Dũng về những điều bình dị quanh mình. Tác phẩm dạy chúng ta cách cảm nhận cuộc sống bằng mọi giác quan và trái tim, để thấy rằng mỗi người, mỗi vật đều mang trong mình một vẻ đẹp riêng biệt cần được nâng niu và thấu hiểu.",
    coverUrl: "",
    category: "Văn học Việt Nam",
    points: 130,
    level: 1
  },
  {
    id: "45",
    title: "Cho Tôi Xin Một Vé Đi Tuổi Thơ",
    author: "Nguyễn Nhật Ánh",
    description: "Cuộc hành trình ngược thời gian về với thế giới của bốn đứa trẻ: Cu Mùi, Hải cò, Tí sún và Tủn. Bằng cách 'phát minh' lại thế giới và những trò chơi nghịch ngợm, tác phẩm là lời nhắc nhở nhẹ nhàng về sự hồn nhiên đã mất và mong muốn được thấu hiểu tâm hồn trẻ thơ của người lớn.",
    coverUrl: "",
    category: "Văn học Việt Nam",
    points: 150,
    level: 2
  },
  {
    id: "46",
    title: "Con Hủi",
    author: "Helena Mniszek",
    description: "Một câu chuyện tình yêu đầy bi kịch giữa nàng Stefcia xinh đẹp và nhà quý tộc Waldemar. Vượt qua những định kiến giai cấp khắt khe và sự độc ác của xã hội thượng lưu, tình yêu của họ tỏa sáng như một viên ngọc, dù cuối cùng phải kết thúc trong nỗi đau. Tác phẩm ca ngợi sự chung thủy và lòng cao thượng.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 190,
    level: 3
  },
  {
    id: "47",
    title: "Nanh Trắng",
    author: "Jack London",
    description: "Trái ngược với 'Tiếng gọi nơi hoang dã', Nanh Trắng kể về một chú chó lai sói từ thế giới hoang dã được con người thuần hóa bằng tình yêu thương. Tác phẩm khám phá sức mạnh biến đổi của sự tử tế và khả năng chung sống hòa bình giữa các loài, một bài ca về lòng trung thành tuyệt đối.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 180,
    level: 3
  },
  {
    id: "48",
    title: "Sự Tích Các Loài Hoa",
    author: "Sưu tầm",
    description: "Những câu chuyện dân gian huyền ảo giải thích nguồn gốc và ý nghĩa của các loài hoa quen thuộc. Từ hoa hồng rực rỡ đến hoa cúc giản đơn, mỗi loài hoa đều mang trong mình một điển tích về tình yêu, lòng hiếu thảo hay sự hy sinh, giúp em thêm yêu và trân trọng thiên nhiên.",
    coverUrl: "",
    category: "Cổ tích",
    points: 110,
    level: 1
  },
  {
    id: "49",
    title: "Ngụ Ngôn La Fontaine",
    author: "Jean de La Fontaine",
    description: "Những câu chuyện ngắn gọn về các loài vật như Ve và Kiến, Thỏ và Rùa nhưng lại chứa đựng những chiêm nghiệm sâu sắc về thói hư tật xấu và cách ứng xử trong cuộc sống. Tác phẩm là sự kết hợp tài tình giữa nghệ thuật kể chuyện và các bài học đạo đức kinh điển.",
    coverUrl: "",
    category: "Ngụ ngôn",
    points: 130,
    level: 2
  },
  {
    id: "50",
    title: "Chuyện Con Chó Được Đặt Tên Là Trung Thành",
    author: "Luis Sepúlveda",
    description: "Lời tâm sự của một chú chó Mapuche trung thành về mối liên kết thiêng liêng với những người dân bản địa và thiên nhiên núi rừng. Tác phẩm là tiếng lòng về sự bảo tồn văn hóa, tình yêu đối với trái đất và vẻ đẹp của một linh hồn luôn giữ trọn lời hứa, dù phải đối mặt với nỗi đau.",
    coverUrl: "",
    category: "Văn học Thế giới",
    points: 140,
    level: 1
  },
  {
    id: "51",
    title: "Cá Bống Mú",
    author: "Đoàn Giỏi",
    description: "Truyện dài của nhà văn Đoàn Giỏi, kể về cuộc sống gian khổ nhưng anh dũng của người dân Nam Bộ dưới ách áp bức thực dân. Tác phẩm tái hiện chân thực thiên nhiên hoang sơ và hình ảnh những người nông dân xóm Kèo Nèo hiền lành nhưng hiên ngang, dám đứng lên chống lại sự bóc lột và bất công. Qua đó, tác giả ca ngợi tâm hồn trong sáng, lòng dũng cảm của người dân khẩn hoang và tình yêu quê hương đất nước nồng nàn.",
    coverUrl: "",
    category: "Văn học Việt Nam",
    points: 150,
    level: 1
  }
];

